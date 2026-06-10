# Muna Agency website

Astro SEO website for `munaagency.com`.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

Recommended: Cloudflare Pages.

- Build command: `npm run build`
- Build output directory: `dist`
- Production domain: `munaagency.com`

## Lead form integrations

The contact form posts to `/api/lead`, implemented as a Cloudflare Pages Function.

Set these environment variables in Cloudflare Pages:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `GOOGLE_APPS_SCRIPT_URL`

`GOOGLE_APPS_SCRIPT_URL` should point to a Google Apps Script Web App owned by `munaagencyuz@gmail.com`. The script should append rows to Google Sheets and send email to `info@munamedia.me`.

Contacts shown on the website:

- General: info@munamedia.me
- Tenders: brief@munamedia.me
- Careers: job@munamedia.me
- Phone: +998 33 130 13 13
