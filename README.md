# Shareable Diagrams

## Required Environment Variables

- `VITE_JAZZ_APP_ID`
- `VITE_JAZZ_SERVER_URL`
- `VITE_JAZZ_PASSKEY_RP_ID`
- `SHARE_DIAGRAM_BASE_URL` (optional, defaults to the GitHub Pages URL)
- `SHARE_DIAGRAM_GRANT_SERVICE_URL` (optional, defaults to `http://127.0.0.1:43110`)

## Local Development

```bash
npm install
npm run dev
```

## Skill Publishing

```bash
npm run build:skill
node skills/share-diagram/scripts/grant-server.mjs
node skills/share-diagram/scripts/encode.mjs --grant /tmp/diagram.md
```

Open the printed grant URL in the browser to approve owner-wide edit access for the current browser identity.
