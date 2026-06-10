export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/lead') {
      if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders() });
      }
      if (request.method !== 'POST') {
        return json({ ok: false, error: 'Method not allowed' }, 405);
      }
      return handleLead(request, env, ctx);
    }

    return env.ASSETS.fetch(request);
  }
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function json(payload, status = 200) {
  return Response.json(payload, { status, headers: corsHeaders() });
}

async function handleLead(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  const required = ['name', 'email', 'message'];
  for (const key of required) {
    if (!data[key] || String(data[key]).trim().length < 2) {
      return json({ ok: false, error: `Missing ${key}` }, 400);
    }
  }

  const text = [
    'New Muna Agency lead',
    `Name: ${data.name || ''}`,
    `Company: ${data.company || ''}`,
    `Email: ${data.email || ''}`,
    `Phone/Telegram: ${data.phone || ''}`,
    `Market: ${data.market || ''}`,
    `Budget: ${data.budget || ''}`,
    `Message: ${data.message || ''}`,
    `Source: ${data.source || 'munaagency.com'}`
  ].join('\n');

  const jobs = [];

  if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
    jobs.push(fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text })
    }));
  }

  if (env.GOOGLE_APPS_SCRIPT_URL) {
    jobs.push(fetch(env.GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...data,
        text,
        to: 'info@munamedia.me',
        sheetAccount: 'munaagencyuz@gmail.com'
      })
    }));
  }

  if (jobs.length === 0) {
    return json({ ok: false, error: 'No integrations configured' }, 500);
  }

  const results = await Promise.allSettled(jobs);
  const failed = results.filter((item) => item.status === 'rejected' || !item.value?.ok);

  if (failed.length === results.length) {
    return json({ ok: false, error: 'All integrations failed', integrations: jobs.length, failed: failed.length }, 502);
  }

  return json({ ok: true, integrations: jobs.length, failed: failed.length });
}
