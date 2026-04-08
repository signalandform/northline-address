# Northline Address (Lead-gen Prototype)

Premium marketing/eCommerce hybrid prototype for a modern exterior address products brand.

- Deployment target: **Vercel** → `northline.signalandform.net`
- Conversion model: **lead-gen** (forms + email), not live checkout

## Local dev

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Inquiry forms (email)

Forms POST to `POST /api/inquiry`.

### Required env vars (for email sending)

Set these in Vercel (Project → Settings → Environment Variables) and locally in `.env.local`.

- `GMAIL_CLIENT_ID`
- `GMAIL_CLIENT_SECRET`
- `GMAIL_REFRESH_TOKEN`
- `GMAIL_REDIRECT_URI` (optional; default `http://localhost`)

Optional:
- `INQUIRY_TO` (default: `jack@signalandform.net, matthew.derek.nelson@gmail.com`)
- `INQUIRY_FROM_NAME` (default: `Northline Address`)
- `INQUIRY_FROM_EMAIL` (default: `ai@signalandformllc.com`)

Notes:
- If the Gmail env vars are missing, the endpoint will return `{ ok: true, warn: "email_not_configured" }` and log to the server console.

## Pages

- `/` Home
- `/shop`
- `/floating-numbers`
- `/address-plaques`
- `/quickship`
- `/products/[slug]` (3 flagship products)
- `/custom`
- `/trade`
- `/installation`
- `/faq`
- `/contact`

## Next step: ready-to-sell checkout

See the Google Doc → **Whiteboard** tab: “READY-TO-SELL CHECKOUT — Next Steps”.
