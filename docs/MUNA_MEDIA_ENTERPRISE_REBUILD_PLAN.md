# Muna Media enterprise website rebuild plan

## Confirmed decisions

- Public brand name: **Muna Media**.
- `munaagency.com` remains the English acquisition/SEO domain, not the public brand name.
- Primary site language for `munaagency.com`: English.
- Public claims allowed:
  - up to 120-day post-payment;
  - 15-minute response SLA;
  - 18/7/365 response coverage;
  - 99.99% uptime for tracking and dashboard infrastructure;
  - open-book pricing with no hidden media markups.
- Do not publish a minimum client budget.
- Analytics exists; IDs will be provided later.
- Leads should go to Telegram, Google Sheets and email.
- CMS choice: Sanity CMS for blog, case studies and service pages.
- CMS workflow: draft -> review -> approved -> published.
- Blog language for first phase: English.
- Case metrics may be disclosed publicly.
- Client logos allowed: all logos already present on munamedia.me.
- Testimonials: draft placeholders may be written, but should be reviewed before being presented as real quotes.
- Top commercial services:
  1. Media Buying
  2. Telegram Marketing
  3. Influencer Marketing

## Positioning

Muna Media should not be positioned as a generic advertising agency. The website should frame Muna Media as an enterprise marketing execution partner for international brands entering or scaling in Central Asia.

Core promise:

> Enter Central Asia with less risk, more control and full media transparency.

Supporting pillars:

- open-book media buying;
- local execution across Uzbekistan and Central Asia;
- transparent reporting through Minora AI dashboards;
- reputation and market-entry risk control;
- enterprise operating standards: post-payment, SLA, uptime and vendor compliance.

## Homepage target structure

1. Enterprise hero with clear CTA.
2. Client logo wall.
3. Trust/operating standards: post-payment, open-book pricing, SLA, uptime.
4. Service tabs: Media Buying, Telegram Marketing, Influencer Marketing, Market Entry, Reputation, Performance.
5. Minora AI dashboard block.
6. Industry solutions.
7. Featured case studies.
8. Method/process.
9. Testimonials/draft quotes pending approval.
10. Lead magnet: Central Asia Market Entry Readiness Score.
11. Blog/resource preview.
12. Final CTA.

## Navigation model

- Solutions
  - Market Entry
  - Lead Generation
  - Reputation Protection
  - App Growth
  - E-commerce Growth
- Services
  - Media Buying
  - Telegram Marketing
  - Influencer Marketing
  - Digital Performance
  - OOH / DOOH
  - SEO / AEO / GEO
  - ORM / SERM
- Industries
  - Fintech
  - Banks & Finance
  - E-commerce
  - Travel
  - Gaming
  - Education
  - Fashion
- Platform
  - Minora AI Dashboards
  - Real-time Reporting
  - Lead Intelligence
- Resources
  - Case Studies
  - Blog
  - Market Reports
  - Media Kit
- Company
  - About
  - Partners
  - Careers
  - Contact

## Analytics architecture

Use Google Tag Manager as the primary script container. Add GA4, Yandex Metrica, ad pixels and consent integrations through GTM.

Events to track:

- page_view;
- cta_click;
- form_start;
- generate_lead;
- form_error;
- phone_click;
- email_click;
- telegram_click;
- service_page_view;
- case_view;
- blog_read_50;
- blog_read_90;
- lead_magnet_submit.

Required IDs from client:

- GTM container ID;
- GA4 measurement ID;
- Yandex Metrica counter ID;
- ad pixel IDs if needed.

## CMS recommendation

Use **Sanity CMS + Astro**.

Content types:

- servicePage;
- industryPage;
- caseStudy;
- blogPost;
- author;
- testimonial;
- clientLogo;
- leadMagnet;
- navigationItem.

Workflow:

- draft;
- review;
- approved;
- published.

## First implementation phase

- Replace all public `Muna Agency` mentions with `Muna Media`.
- Add real brand logos from the Muna Media media kit.
- Replace simple nav with enterprise mega menu.
- Add analytics component with environment-variable placeholders.
- Add dataLayer events for CTA and lead form.
- Keep analytics inactive until real IDs are provided.
