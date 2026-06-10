# Sanity setup runbook for Muna Media

This project is prepared for Sanity CMS. Astro already has a local-data fallback, so the site builds even before Sanity credentials are connected.

## Current status

Prepared locally:

- `sanity.config.ts`
- `sanity.cli.ts`
- `sanity/schemaTypes.ts`
- `scripts/generate-sanity-seed.ts`
- `sanity/seed/muna-media-seed.ndjson`
- Astro content bridge: `src/lib/content.ts`

Blocked remotely until Sanity auth is available:

- creating the real Sanity project;
- creating/importing dataset;
- deploying Sanity Studio;
- setting CORS origins in Sanity.

The CLI currently reports:

```text
User: Not logged in
Error: You must login first - run "sanity login"
```

## Option A. Browser login on this machine

Run:

```bash
cd /tmp/munamedia-com-audit
npx sanity login
```

Then create or select the project in Sanity and set env variables.

## Option B. Token login

Create a Sanity token with permissions to create datasets and import documents, then run:

```bash
cd /tmp/munamedia-com-audit
printf '%s' "$SANITY_AUTH_TOKEN" | npx sanity login --with-token
```

Do not commit the token.

## Required environment variables

For Studio:

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

For Astro frontend:

```bash
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

## Create dataset

```bash
npm run sanity:dataset:create
```

## Generate seed content

```bash
npm run sanity:seed:generate
```

This creates:

```text
sanity/seed/muna-media-seed.ndjson
```

Current seed size:

```text
55 documents
```

Includes:

- author;
- service pages;
- solution pages;
- industry pages;
- case studies;
- blog posts;
- client logos;
- draft testimonials with approval guard.

## Import seed content

```bash
npm run sanity:seed:import
```

The script uses `--replace`, so deterministic document IDs are updated cleanly.

## Add CORS for the site

```bash
npm run sanity:cors:add
```

Add preview/local origins if needed:

```bash
npx sanity cors add http://localhost:4321 --credentials
npx sanity cors add https://munaagency.com --credentials
```

## Run Studio locally

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id SANITY_STUDIO_DATASET=production npm run studio:dev
```

Studio base path is:

```text
/studio
```

## Deploy Studio

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id SANITY_STUDIO_DATASET=production npm run studio:deploy
```

## Frontend behavior

`src/lib/content.ts` tries to read from Sanity when `PUBLIC_SANITY_PROJECT_ID` is present and not `replace-me`.

If Sanity is unavailable, empty, or misconfigured, Astro falls back to local static data:

- `src/data/pages.ts`
- `src/data/cases.ts`
- `src/data/blog.ts`

This prevents failed builds while the CMS is being configured.

## Publication workflow

Sanity documents use:

```text
draft -> review -> approved -> published
```

The frontend currently reads:

```text
approved
published
```

Testimonials are guarded by:

```text
draft_pending_client_approval
approved
do_not_publish
```

Do not publish testimonial copy until it is approved by the client.
