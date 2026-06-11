# Lead status workflow

The website lead endpoint sends every form submission to Telegram and Google Apps Script with the same normalized payload. Use the Google Sheet as the lightweight CRM until a full CRM is connected.

## Default columns

Recommended Google Sheet columns, in this order:

1. `receivedAt`
2. `leadId`
3. `status`
4. `pipelineStage`
5. `priority`
6. `sla`
7. `ownerHint`
8. `score`
9. `scoreLabel`
10. `scoreReasons`
11. `recommendedAction`
12. `name`
13. `company`
14. `email`
15. `phone`
16. `market`
17. `primaryNeed`
18. `message`
19. `landingPage`
20. `firstPage`
21. `pagePath`
22. `referrer`
23. `utmSource`
24. `utmMedium`
25. `utmCampaign`
26. `utmTerm`
27. `utmContent`
28. `browserLanguage`
29. `userAgent`
30. `source`
31. `managerNotes`
32. `nextFollowUpAt`
33. `closedReason`

## Status values

Use these values manually in the Sheet or map them in a future CRM integration:

- `new` — received, not contacted yet.
- `contacted` — first reply/call sent.
- `qualified` — business need, geography, decision process, and budget/timing confirmed.
- `proposal_sent` — offer, plan, or audit proposal sent.
- `won` — converted to active project.
- `lost` — not relevant, no budget, geography mismatch, or unresponsive.

## Pipeline stages

The Worker assigns the first stage automatically:

- `priority_qualification` — high-fit lead, priority P1, 15-minute SLA.
- `qualification` — medium-fit lead, priority P2, same-business-day SLA.
- `triage` — low-signal lead, priority P3, next-business-day SLA.

## Manager handling rules

### P1 / High fit

Do within 15 minutes:

1. Reply personally.
2. Ask for a discovery call.
3. Confirm target market, timeline, approximate budget, and decision maker.
4. Move status to `contacted`.

### P2 / Medium fit

Do same business day:

1. Ask qualification questions.
2. Confirm whether the lead has an active campaign or planned launch.
3. If fit is confirmed, move to `qualified`.

### P3 / Needs qualification

Do next business day:

1. Ask for company context and target market.
2. If there is no clear commercial intent, move to `lost` with `closedReason`.

## Future CRM mapping

When moving from Google Sheets to AmoCRM/HubSpot/Bitrix, map:

- `leadId` → external ID / custom field.
- `pipelineStage` → pipeline stage.
- `priority` → priority field.
- `score` and `scoreLabel` → lead score.
- `utm*`, `landingPage`, `firstPage`, `referrer` → attribution fields.
- `recommendedAction` → first task text.
- `sla` → due date / task deadline.

## Verification

After deployment, send a marked test lead through `/api/lead` and verify:

- Telegram receives the manager card.
- Sheet row has `leadId`, `status`, `pipelineStage`, `priority`, `score`, `utmSource`, and `recommendedAction`.
- Invalid email returns HTTP 400.
- CI passes `npm run test:lead-worker`.
