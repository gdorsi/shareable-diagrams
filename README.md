# Shareable Diagrams

## Runtime Config

- Jazz app ID and server URL are pinned in [src/lib/sharedConfig.ts](/Users/guidodorsi/workspace/shareable-diagrams/src/lib/sharedConfig.ts).
- `VITE_JAZZ_PASSKEY_RP_ID` (optional, defaults to `gdorsi.github.io`)
- `SHARE_DIAGRAM_BASE_URL` (optional, defaults to the GitHub Pages URL)
- `SHARE_DIAGRAM_GRANT_SERVICE_URL` (optional, defaults to `http://127.0.0.1:43110`)

## Schema Publishing

- `JAZZ_ADMIN_SECRET`

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
