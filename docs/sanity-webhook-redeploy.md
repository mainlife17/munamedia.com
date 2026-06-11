# Sanity content redeploy

This site is static Astro on Cloudflare Workers. Sanity content is fetched during build, so the site must be rebuilt after editors publish content in Sanity.

## What is already in the repository

The workflow `.github/workflows/sanity-redeploy.yml` listens for:

- `repository_dispatch` event type: `sanity-content-published`
- manual `workflow_dispatch`

It runs:

1. `npm ci`
2. `npm run check`
3. `npm run build`
4. `npx wrangler deploy`

Required GitHub Actions secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Optional GitHub Actions variables:

- `PUBLIC_SANITY_PROJECT_ID` = `eulrkmkt`
- `PUBLIC_SANITY_DATASET` = `production`

## GitHub token for Sanity webhook

Create a GitHub fine-grained personal access token.

Recommended scope:

- Repository: `mainlife17/munamedia.com`
- Permission: `Contents: Read and write`
- Expiration: 90 or 180 days, then rotate

Do not commit this token and do not paste it into public chats.

## Sanity webhook configuration

In Sanity Manage:

```text
https://www.sanity.io/manage/project/eulrkmkt
```

Create webhook:

- Name: `Redeploy Muna Media website`
- Dataset: `production`
- Trigger on: create, update, delete, publish
- HTTP method: `POST`
- URL:

```text
https://api.github.com/repos/mainlife17/munamedia.com/dispatches
```

Headers:

```text
Accept: application/vnd.github+json
Authorization: Bearer <GITHUB_FINE_GRAINED_TOKEN>
X-GitHub-Api-Version: 2022-11-28
Content-Type: application/json
```

Payload:

```json
{
  "event_type": "sanity-content-published",
  "client_payload": {
    "reason": "Sanity content changed",
    "projectId": "eulrkmkt",
    "dataset": "production"
  }
}
```

## Verification

After saving the webhook:

1. Publish a small content edit in Sanity.
2. Open GitHub Actions.
3. Confirm workflow `Sanity Content Redeploy` started.
4. Confirm it completed successfully.
5. Check the live page with a no-cache request.

Example:

```bash
curl -I https://munaagency.com/case-studies/
```

## Rollback

If Sanity-triggered redeploys become noisy:

1. Disable the webhook in Sanity Manage.
2. Keep manual deploys via GitHub Actions → `Sanity Content Redeploy` → `Run workflow`.

The normal push deploy workflow remains separate in `.github/workflows/deploy-cloudflare.yml`.
