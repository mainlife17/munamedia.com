export async function onRequestPost(context) {
  const { request, env } = context;
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const required = ['name', 'email', 'message'];
  for (const key of required) {
    if (!data[key] || String(data[key]).trim().length < 2) {
      return Response.json({ ok: false, error: `Missing ${key}` }, { status: 400 });
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
      body: JSON.stringify({ ...data, text, to: 'info@munamedia.me', sheetAccount: 'munaagencyuz@gmail.com' })
    }));
  }

  const results = await Promise.allSettled(jobs);
  const failed = results.filter((item) => item.status === 'rejected');
  if (failed.length === results.length && jobs.length > 0) {
    return Response.json({ ok: false, error: 'All integrations failed' }, { status: 502 });
  }

  return Response.json({ ok: true, integrations: jobs.length, failed: failed.length });
}
