# Deployment guide for munaagency.com

## Cloudflare Pages

Create a Cloudflare Pages project connected to `mainlife17/munamedia.com`.

Settings:

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `22`

## Custom domains

Add both domains:

- `munaagency.com`
- `www.munaagency.com`

Recommended canonical host:

- `https://munaagency.com`

Redirect `www.munaagency.com/*` to `https://munaagency.com/$1` in Cloudflare Redirect Rules.

## Namecheap DNS

Recommended: use Cloudflare nameservers.

1. Add `munaagency.com` to Cloudflare.
2. Copy Cloudflare nameservers.
3. In Namecheap, set Nameservers to Custom DNS.
4. Paste Cloudflare nameservers.
5. Wait for DNS propagation.
6. Add the custom domains in Cloudflare Pages.

## Lead form variables

Set these in Cloudflare Pages → Settings → Environment variables:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `GOOGLE_APPS_SCRIPT_URL`

Do not commit real values to GitHub.

## Google Sheets and email

1. Log in as `munaagencyuz@gmail.com`.
2. Create a Google Sheet named `Muna Agency Leads`.
3. Open Extensions → Apps Script.
4. Paste `docs/google-apps-script.js`.
5. Deploy → New deployment → Web app.
6. Execute as: Me.
7. Who has access: Anyone.
8. Copy the Web App URL into `GOOGLE_APPS_SCRIPT_URL` in Cloudflare Pages.

The script appends leads to the `Leads` sheet and emails `info@munamedia.me`.

## Verification after deploy

Check:

- `https://munaagency.com/`
- `https://munaagency.com/robots.txt`
- `https://munaagency.com/sitemap-index.xml`
- `https://munaagency.com/central-asia/advertising-agency/`
- Contact form submit.
- Telegram lead notification.
- Google Sheet row.
- Email notification.
