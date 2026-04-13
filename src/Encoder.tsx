import { useState, useEffect, useCallback } from 'react'
import { ComarkClient } from '@comark/react'
import mermaid from '@comark/react/plugins/mermaid'
import { Mermaid } from '@comark/react/plugins/mermaid'
import highlight from '@comark/react/plugins/highlight'
import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'
import { encodeToHash } from './lib/encode'

const plugins = [
  mermaid(),
  highlight({ themes: { light: githubLight, dark: githubDark } }),
]

const components = { mermaid: Mermaid }

const defaultMarkdown = `# My POC Document

## Architecture Overview

\`\`\`mermaid
graph LR
    A[User] --> B[API Gateway]
    B --> C[Service A]
    B --> D[Service B]
    C --> E[(Database)]
    D --> E
\`\`\`

## Key Decisions

- **Decision 1**: Use event-driven architecture
- **Decision 2**: PostgreSQL for persistence

## Implementation Notes

This is a proof of concept demonstrating the shareable diagrams feature.

\`\`\`typescript
const handler = async (event: Event) => {
  await processEvent(event)
}
\`\`\`
`

export default function Encoder() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [url, setUrl] = useState('')
  const [byteSize, setByteSize] = useState(0)
  const [copied, setCopied] = useState(false)

  const generateUrl = useCallback(async (md: string) => {
    try {
      const hash = await encodeToHash(md)
      const fullUrl = `${window.location.origin}${window.location.pathname}#${hash}`
      setUrl(fullUrl)
      setByteSize(new TextEncoder().encode(hash).length)
    } catch {
      setUrl('')
      setByteSize(0)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => generateUrl(markdown), 300)
    return () => clearTimeout(timeout)
  }, [markdown, generateUrl])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const sizeColor = byteSize > 32000 ? '#cf222e' : byteSize > 20000 ? '#9a6700' : '#1a7f37'

  return (
    <div className="encoder">
      <div className="encoder-header">
        <h1>Shareable Diagrams</h1>
        <p>Paste or write markdown with Mermaid diagrams, then share the URL.</p>
      </div>
      <div className="encoder-panels">
        <div className="encoder-input">
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="encoder-preview">
          <ComarkClient plugins={plugins} components={components}>
            {markdown}
          </ComarkClient>
        </div>
      </div>
      <div className="encoder-footer">
        <span className="size-indicator" style={{ color: sizeColor }}>
          URL size: {(byteSize / 1024).toFixed(1)} KB
          {byteSize > 32000 && ' (may not work in all browsers)'}
        </span>
        <button
          className="copy-btn"
          onClick={handleCopy}
          disabled={!url}
        >
          {copied ? 'Copied!' : 'Copy Shareable URL'}
        </button>
      </div>
    </div>
  )
}
