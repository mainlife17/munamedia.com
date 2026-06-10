# Muna Media CMS workflow

## CMS choice

Use **Sanity CMS** as the editorial layer for `munaagency.com`.

Astro remains the frontend and Cloudflare Worker Assets remains the deployment layer. Sanity stores structured content for blog posts, cases, service pages, testimonials and client logos.

## Required Sanity setup

1. Create a Sanity project.
2. Dataset: `production`.
3. Add these environment variables locally and in deployment when content is connected:

```bash
PUBLIC_SANITY_PROJECT_ID=...
PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=...
SANITY_STUDIO_DATASET=production
```

4. Start the studio locally:

```bash
npm run studio:dev
```

5. Deploy the studio when ready:

```bash
npm run studio:deploy
```

## Editorial workflow

Every main content type has `workflowStatus`:

1. `draft` - working copy.
2. `review` - ready for internal review.
3. `approved` - approved by Muna Media management/client owner.
4. `published` - visible on the public site.

Only content with `published` should be rendered publicly once Sanity goes live.

## Content types

### Service page

Used for:

- Media Buying
- Telegram Marketing
- Influencer Marketing
- Digital Performance
- SEO / AEO / GEO
- ORM / SERM
- OOH / DOOH
- BTL & Events
- Market Entry

Key fields:

- title
- slug
- hero headline
- hero subheadline
- customer pains
- deliverables
- process
- related cases
- FAQ
- SEO title/description/canonical/noindex

### Case study

Unified structure:

1. Client
2. Industry
3. Market
4. Services
5. Executive summary
6. Challenge
7. Strategy
8. Execution
9. Results
10. What worked
11. Related services
12. Missing data / internal notes

Important: testimonials can be drafted but should not be published as real client quotes until approved.

### Blog post

Fields:

- title
- slug
- language
- author
- category
- excerpt
- target keyword
- buyer stage
- body
- related services
- SEO fields

First blog language: English.

Recommended categories:

- Market Entry
- Media Buying
- Telegram Marketing
- Influencer Marketing
- AI & Analytics
- Reputation
- Case Breakdowns

### Testimonial

Fields:

- quote
- person name
- title
- company
- approval status

Approval statuses:

- draft_pending_client_approval
- approved
- do_not_publish

### Client logo

Fields:

- name
- logo
- industry
- canPublish

## First 10 blog topics

1. How to enter the Uzbekistan market: a practical marketing checklist for international brands
2. Open-book media buying in Central Asia: how to avoid hidden markups
3. Telegram marketing in Uzbekistan: channels, communities and conversion flows
4. Influencer marketing in Central Asia: how to choose creators without wasting budget
5. Uzbekistan media landscape: what global brands need to know before launch
6. How to build a 90-day market entry plan for Central Asia
7. OOH and DOOH advertising in Tashkent: when it works and how to measure it
8. How fintech brands can build trust in Uzbekistan
9. Why monthly PDF reports are too late for serious media buying
10. CAC and LTV in emerging markets: what to track before scaling spend

## Next content-data requirements

For final case-study versions, collect:

- campaign dates;
- channels used;
- media budget ranges if publishable;
- reach/impressions;
- leads/registrations/downloads/orders;
- CPA/CAC;
- brand lift or qualitative outcomes;
- client-approved quotes;
- public logo permission confirmation.
