# Shareable Diagrams — Design Spec

## Purpose

A GitHub Pages hosted SPA for sharing markdown POCs (with Mermaid diagrams) from agentic coding sessions. The entire document is encoded in the URL hash fragment — no server, no database, no tracking. A companion skill lets coding assistants generate shareable URLs directly.

## URL Encoding

**Algorithm:** Gzip + base64url via native APIs.

**Encoding pipeline:**
1. `TextEncoder.encode(markdown)` → `Uint8Array`
2. `CompressionStream('gzip')` → compressed `Uint8Array`
3. `compressed.toBase64({alphabet: 'base64url'})` → URL-safe string

**Decoding pipeline (reverse):**
1. `Uint8Array.fromBase64(hash, {alphabet: 'base64url'})` → `Uint8Array`
2. `DecompressionStream('gzip')` → decompressed `Uint8Array`
3. `TextDecoder.decode()` → markdown string

**CLI encoder (Node.js):**
1. `Buffer.from(markdown, 'utf-8')`
2. `zlib.gzipSync(buffer)`
3. `compressed.toBase64({alphabet: 'base64url'})` (Node 21+) or manual base64url encoding

**URL format:** `https://gdorsi.github.io/shareable-diagrams/#<base64url-encoded-gzipped-markdown>`

**Size limits:** Warn if encoded hash exceeds ~32KB. Hard limit at ~100KB (browser-dependent). The gzip compression typically achieves 3-5x reduction on markdown.

## Viewer App

**Stack:** Vite + React + TypeScript + Comark

**Routing:** Single-page app with hash-based content delivery.
- Hash present → decode and render as a shared document
- No hash → show the encoder/composer page

### Document Viewer (`/src/Viewer.tsx`)

- Reads `window.location.hash`, strips the `#`
- Decodes and decompresses to markdown
- Renders with `@comark/react` `<Comark>` component
- Plugins: `@comark/react/plugins/mermaid` (Mermaid diagrams), `@comark/react/plugins/highlight` (Shiki syntax highlighting)
- Minimal GitHub-docs style: clean sans-serif typography, generous spacing, proper code block styling
- Shows a "Share" button that copies the current URL
- Error state: if decoding fails, show a clear error message
- Loading state: while decompressing, show a brief skeleton

### Encoder Page (`/src/Encoder.tsx`)

- Split-pane layout: markdown textarea on left, live Comark preview on right
- Real-time URL length indicator (bytes, with color-coded warnings)
- "Copy Shareable URL" button — copies full URL to clipboard
- Live preview updates as user types (debounced)
- Uses the same Comark configuration as the viewer
- Default content: a brief example with a mermaid diagram to demonstrate the feature

### Shared Encoding Library (`/src/lib/`)

- `encode.ts` — `encodeToHash(markdown: string): Promise<string>` using CompressionStream
- `decode.ts` — `decodeFromHash(hash: string): Promise<string>` using DecompressionStream

Both are async due to the streaming CompressionStream/DecompressionStream APIs.

### Styling

- No UI framework. Plain CSS or CSS modules.
- Light theme only for v1.
- GitHub-docs inspired: system font stack, `#fff` background, `#24292f` text, blue links.
- Mermaid diagrams render with the `default` theme.
- Code blocks: Shiki with `github-light` theme.
- Responsive: full-width on mobile, max-width container on desktop.

## Skill

**Repo:** `github.com/gdorsi/shareable-diagrams`
**Install:** `npx skills add gdorsi/shareable-diagrams`
**Skill name:** `share-diagram`

### Skill Structure

```
skills/
└── share-diagram/
    ├── SKILL.md           # Skill definition with YAML frontmatter
    └── scripts/
        └── encode.mjs     # Node.js CLI encoder
```

### SKILL.md Contents

- **Name:** `share-diagram`
- **Description:** Generate shareable URLs for markdown documents with Mermaid diagrams. Use when you need to share a POC, architecture diagram, or any markdown content as a self-contained URL.
- **Instructions for the agent:**
  1. Compose the markdown document (can include Mermaid code blocks)
  2. Write it to a temp file
  3. Run `node skills/share-diagram/scripts/encode.mjs <file>` (or pipe stdin)
  4. Present the output URL to the user
- **Includes guidance on** writing good POC documents: clear headings, Mermaid diagram best practices, keeping content concise for URL size limits

### encode.mjs Script

- Reads from file path argument or stdin
- Compresses with `zlib.gzipSync`
- Encodes with base64url (fallback for Node < 21: manual base64url via `Buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')`)
- Outputs full URL to stdout: `https://gdorsi.github.io/shareable-diagrams/#<hash>`
- Exit code 1 with error message on failure
- Flags: `--raw` to output just the hash, `--url` (default) to output full URL

## Project Structure

```
shareable-diagrams/
├── src/
│   ├── App.tsx                # Hash router: viewer vs encoder
│   ├── Viewer.tsx             # Decode + render shared documents
│   ├── Encoder.tsx            # Markdown editor + preview + URL generation
│   ├── main.tsx               # React entry point
│   ├── lib/
│   │   ├── encode.ts          # encodeToHash(markdown) → base64url hash
│   │   └── decode.ts          # decodeFromHash(hash) → markdown
│   └── style.css              # Global styles
├── public/
│   └── favicon.svg
├── skills/
│   └── share-diagram/
│       ├── SKILL.md
│       └── scripts/
│           └── encode.mjs
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── .github/
    └── workflows/
        └── deploy.yml        # Deploy to GH Pages on push to main
```

## GitHub Pages Deployment

- GitHub Actions workflow on push to `main`
- Build with `npm run build`
- Deploy `dist/` to `gh-pages` branch
- SPA support: all routes serve `index.html` (Vite handles this with a `public/` fallback or a custom 404.html)

## Out of Scope (v1)

- Dark mode
- Authentication or access control
- Document persistence / saving
- Multiple documents per URL
- URL shortening service
- Collaboration / real-time editing
