import { readFileSync } from 'node:fs';

const workerSource = readFileSync(new URL('../worker.js', import.meta.url), 'utf8');
const workerModule = await import(`data:text/javascript;base64,${Buffer.from(workerSource).toString('base64')}`);
const worker = workerModule.default;
const { scoreLead } = workerModule;

const originalFetch = globalThis.fetch;
const calls = [];

globalThis.fetch = async (url, init = {}) => {
  calls.push({ url: String(url), init });
  if (String(url).includes('api.telegram.org')) {
    const body = JSON.parse(init.body || '{}');
    if (!body.text.includes('New Muna Media lead')) {
      return new Response('bad telegram body', { status: 400 });
    }
    return Response.json({ ok: true, result: { message_id: 1 } });
  }
  if (String(url).includes('script.google.com')) {
    const body = JSON.parse(init.body || '{}');
    if (!body.leadId || !body.scoreLabel || !body.utmSource) {
      return new Response('bad sheet body', { status: 400 });
    }
    return Response.json({ ok: true });
  }
  return originalFetch(url, init);
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function postLead(payload, env = defaultEnv()) {
  return worker.fetch(new Request('https://munaagency.com/api/lead?utm_source=ignored', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'origin': 'https://munaagency.com',
      'referer': 'https://munaagency.com/services/media-buying/?utm_source=google&utm_campaign=test',
      'user-agent': 'lead-test/1.0',
      'accept-language': 'en-US,en;q=0.9'
    },
    body: JSON.stringify(payload)
  }), env, {});
}

function defaultEnv() {
  return {
    TELEGRAM_BOT_TOKEN: 'test-token',
    TELEGRAM_CHAT_ID: '12345',
    GOOGLE_APPS_SCRIPT_URL: 'https://script.google.com/macros/s/test/exec',
    ASSETS: { fetch: () => new Response('asset') }
  };
}

const goodLead = {
  name: 'Alex Buyer',
  company: 'Enterprise Fintech LLC',
  email: 'alex@example.com',
  phone: '+998 90 123 45 67',
  market: 'Uzbekistan',
  primaryNeed: 'Open-book media buying',
  message: 'We need to launch a fintech app growth campaign with ROI tracking and clear budget planning.',
  source: 'munaagency.com',
  landingPage: 'https://munaagency.com/services/media-buying/?utm_source=google&utm_campaign=fintech',
  firstPage: 'https://munaagency.com/',
  utmSource: 'google',
  utmMedium: 'cpc',
  utmCampaign: 'fintech_launch'
};

const response = await postLead(goodLead);
const data = await response.json();
assert(response.status === 200, `expected 200, got ${response.status}: ${JSON.stringify(data)}`);
assert(data.ok === true, 'happy path should be ok');
assert(data.score >= 75, `expected high score, got ${data.score}`);
assert(data.deliveries.length === 2, 'expected 2 deliveries');
assert(calls.some((call) => call.url.includes('api.telegram.org')), 'telegram delivery not called');
assert(calls.some((call) => call.url.includes('script.google.com')), 'google apps script delivery not called');

const invalid = await postLead({ ...goodLead, email: 'not-email' });
const invalidData = await invalid.json();
assert(invalid.status === 400 && invalidData.field === 'email', 'invalid email should be rejected');

const spam = await postLead({ ...goodLead, message: 'casino bonus backlinks for sale now' });
const spamData = await spam.json();
assert(spam.status === 400 && spamData.error === 'Lead rejected', 'spam should be rejected');

const score = scoreLead(goodLead);
assert(score.label === 'High fit', `expected High fit, got ${score.label}`);

console.log(JSON.stringify({ ok: true, happyPath: data, calls: calls.length, spamStatus: spam.status }, null, 2));
