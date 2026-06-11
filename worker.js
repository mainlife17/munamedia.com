export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/lead') {
      if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders(request) });
      }
      if (request.method !== 'POST') {
        return json({ ok: false, error: 'Method not allowed' }, 405, request);
      }
      return handleLead(request, env, ctx);
    }

    return env.ASSETS.fetch(request);
  }
};

const MAX_FIELD_LENGTH = 1500;
const MAX_MESSAGE_LENGTH = 5000;
const ALLOWED_ORIGINS = new Set(['https://munaagency.com', 'https://www.munaagency.com']);

function corsHeaders(request) {
  const origin = request?.headers?.get('Origin') || '';
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.has(origin) ? origin : 'https://munaagency.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin'
  };
}

function json(payload, status = 200, request) {
  return Response.json(payload, { status, headers: corsHeaders(request) });
}

export async function handleLead(request, env = {}) {
  let raw;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400, request);
  }

  const lead = normalizeLead(raw, request);
  const validation = validateLead(lead);
  if (!validation.ok) {
    return json({ ok: false, error: validation.error, field: validation.field }, 400, request);
  }

  const score = scoreLead(lead);
  const leadId = makeLeadId(lead);
  const receivedAt = new Date().toISOString();
  const workflow = leadWorkflow(score);
  const managerText = formatTelegramLead({ lead, score, workflow, leadId, receivedAt });
  const sheetPayload = {
    ...lead,
    leadId,
    receivedAt,
    status: workflow.status,
    pipelineStage: workflow.pipelineStage,
    priority: workflow.priority,
    sla: workflow.sla,
    ownerHint: workflow.ownerHint,
    score: score.score,
    scoreLabel: score.label,
    scoreReasons: score.reasons.join('; '),
    recommendedAction: score.nextAction,
    text: managerText,
    to: 'info@munamedia.me',
    sheetAccount: 'munaagencyuz@gmail.com'
  };

  const jobs = [];

  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    jobs.push(deliverTelegram(env, managerText));
  }

  if (env.GOOGLE_APPS_SCRIPT_URL) {
    jobs.push(deliverGoogleAppsScript(env, sheetPayload));
  }

  if (jobs.length === 0) {
    return json({ ok: false, error: 'No integrations configured' }, 500, request);
  }

  const results = await Promise.allSettled(jobs);
  const deliveries = results.map((item) => {
    if (item.status === 'rejected') return { ok: false, error: item.reason?.message || 'delivery rejected' };
    return item.value;
  });
  const successful = deliveries.filter((item) => item.ok).length;

  if (successful === 0) {
    return json({ ok: false, error: 'All integrations failed', deliveries }, 502, request);
  }

  return json({ ok: true, leadId, score: score.score, scoreLabel: score.label, workflow, deliveries }, 200, request);
}

function normalizeLead(raw, request) {
  const text = (value, limit = MAX_FIELD_LENGTH) => String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, limit);
  const longText = (value) => String(value ?? '').trim().slice(0, MAX_MESSAGE_LENGTH);
  const url = new URL(request.url);
  const referrer = text(raw.referrer || request.headers.get('Referer') || '');
  const landingPage = text(raw.landingPage || raw.landing_page || referrer || url.origin);

  return {
    name: text(raw.name, 160),
    company: text(raw.company, 200),
    email: text(raw.email, 240).toLowerCase(),
    phone: text(raw.phone || raw.telegram || raw.contact, 120),
    market: text(raw.market, 120),
    primaryNeed: text(raw.primaryNeed || raw.primary_need || raw.budget || raw.need, 180),
    message: longText(raw.message),
    source: text(raw.source || 'munaagency.com', 120),
    landingPage,
    pagePath: text(raw.pagePath || raw.page_path || safePath(landingPage), 300),
    firstPage: text(raw.firstPage || raw.first_page || landingPage, 500),
    referrer,
    browserLanguage: text(raw.browserLanguage || raw.browser_language || request.headers.get('Accept-Language') || '', 120),
    userAgent: text(raw.userAgent || raw.user_agent || request.headers.get('User-Agent') || '', 300),
    utmSource: text(raw.utmSource || raw.utm_source, 160),
    utmMedium: text(raw.utmMedium || raw.utm_medium, 160),
    utmCampaign: text(raw.utmCampaign || raw.utm_campaign, 200),
    utmTerm: text(raw.utmTerm || raw.utm_term, 200),
    utmContent: text(raw.utmContent || raw.utm_content, 200)
  };
}

function safePath(value) {
  try { return new URL(value).pathname; } catch { return ''; }
}

function validateLead(lead) {
  if (lead.name.length < 2) return { ok: false, field: 'name', error: 'Missing name' };
  if (lead.company.length < 2) return { ok: false, field: 'company', error: 'Missing company' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return { ok: false, field: 'email', error: 'Invalid email' };
  if (lead.message.length < 10) return { ok: false, field: 'message', error: 'Message is too short' };
  if (looksLikeSpam(lead)) return { ok: false, field: 'message', error: 'Lead rejected' };
  return { ok: true };
}

function looksLikeSpam(lead) {
  const blob = `${lead.name} ${lead.company} ${lead.email} ${lead.message}`.toLowerCase();
  const banned = ['casino bonus', 'viagra', 'crypto recovery', 'porn', 'backlinks for sale'];
  return banned.some((item) => blob.includes(item));
}

export function scoreLead(lead) {
  let score = 35;
  const reasons = [];

  if (lead.company) { score += 10; reasons.push('company provided'); }
  if (lead.phone) { score += 8; reasons.push('phone or Telegram provided'); }
  if (/market entry|open-book|performance|media buying|campaign audit/i.test(lead.primaryNeed)) {
    score += 14; reasons.push('high-intent service selected');
  }
  if (/uzbekistan|central asia|kazakhstan/i.test(lead.market)) {
    score += 10; reasons.push('target market fits Muna Media geography');
  }
  if (/budget|launch|deadline|tender|audit|growth|scale|roi|app|fintech|bank|payment/i.test(lead.message)) {
    score += 12; reasons.push('message contains commercial intent');
  }
  if (lead.utmSource || lead.utmCampaign) { score += 5; reasons.push('attributed campaign traffic'); }
  if (/gmail\.com|mail\.ru|yahoo\.com|hotmail\.com/i.test(lead.email)) {
    score -= 6; reasons.push('personal email domain');
  }

  score = Math.max(0, Math.min(100, score));
  const label = score >= 75 ? 'High fit' : score >= 55 ? 'Medium fit' : 'Needs qualification';
  const nextAction = score >= 75
    ? 'Reply within 15 minutes and propose a discovery call.'
    : score >= 55
      ? 'Ask for budget range, target geography, launch timing, and decision maker.'
      : 'Qualify need and company context before proposing a call.';

  return { score, label, reasons, nextAction };
}

export function leadWorkflow(score) {
  if (score.score >= 75) {
    return {
      status: 'new',
      pipelineStage: 'priority_qualification',
      priority: 'P1',
      sla: '15 minutes',
      ownerHint: 'senior growth / founder-led follow-up'
    };
  }
  if (score.score >= 55) {
    return {
      status: 'new',
      pipelineStage: 'qualification',
      priority: 'P2',
      sla: 'same business day',
      ownerHint: 'sales manager'
    };
  }
  return {
    status: 'new',
    pipelineStage: 'triage',
    priority: 'P3',
    sla: 'next business day',
    ownerHint: 'inside sales / assistant'
  };
}

function formatTelegramLead({ lead, score, workflow, leadId, receivedAt }) {
  const utm = [
    lead.utmSource && `source=${lead.utmSource}`,
    lead.utmMedium && `medium=${lead.utmMedium}`,
    lead.utmCampaign && `campaign=${lead.utmCampaign}`,
    lead.utmTerm && `term=${lead.utmTerm}`,
    lead.utmContent && `content=${lead.utmContent}`
  ].filter(Boolean).join(' | ') || 'none';

  return [
    'New Muna Media lead',
    '',
    `Lead ID: ${leadId}`,
    `Received: ${receivedAt}`,
    `Score: ${score.score}/100 · ${score.label}`,
    `Priority: ${workflow.priority} · ${workflow.pipelineStage} · SLA ${workflow.sla}`,
    `Owner: ${workflow.ownerHint}`,
    `Next action: ${score.nextAction}`,
    '',
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Email: ${lead.email}`,
    `Phone/Telegram: ${lead.phone || 'not provided'}`,
    `Market: ${lead.market || 'not provided'}`,
    `Primary need: ${lead.primaryNeed || 'not provided'}`,
    '',
    'Message:',
    lead.message,
    '',
    `Landing page: ${lead.landingPage || 'unknown'}`,
    `First page: ${lead.firstPage || 'unknown'}`,
    `Referrer: ${lead.referrer || 'direct/unknown'}`,
    `UTM: ${utm}`,
    `Browser language: ${lead.browserLanguage || 'unknown'}`,
    '',
    `Reasons: ${score.reasons.join(', ') || 'no scoring signals'}`
  ].join('\n').slice(0, 3900);
}

function makeLeadId(lead) {
  const input = `${Date.now()}|${lead.email}|${lead.company}|${lead.message.slice(0, 80)}`;
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) - hash + input.charCodeAt(i)) | 0;
  }
  return `muna-${Math.abs(hash).toString(36)}`;
}

async function deliverTelegram(env, text) {
  const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, disable_web_page_preview: true })
  });
  if (!response.ok) {
    return { ok: false, integration: 'telegram', status: response.status, error: await safeResponseText(response) };
  }
  return { ok: true, integration: 'telegram', status: response.status };
}

async function deliverGoogleAppsScript(env, payload) {
  const response = await fetch(env.GOOGLE_APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    return { ok: false, integration: 'google_apps_script', status: response.status, error: await safeResponseText(response) };
  }
  return { ok: true, integration: 'google_apps_script', status: response.status };
}

async function safeResponseText(response) {
  try { return (await response.text()).slice(0, 300); } catch { return 'no response text'; }
}
