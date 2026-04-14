import { useState, useEffect, useRef } from 'react'
import { ComarkClient } from '@comark/react'
import mermaid from '@comark/react/plugins/mermaid'
import { Mermaid } from '@comark/react/plugins/mermaid'
import highlight from '@comark/react/plugins/highlight'
import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'
import { Group, co } from 'jazz-tools'
import { MarkdownDoc } from './lib/schema'

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

type LoadedDoc = co.loaded<typeof MarkdownDoc>

export default function Encoder({ doc: initialDoc }: { doc?: LoadedDoc } = {}) {
  const [doc, setDoc] = useState<LoadedDoc | null>(initialDoc ?? null)
  const [markdown, setMarkdown] = useState(initialDoc?.content ?? defaultMarkdown)
  const [copied, setCopied] = useState(false)
  const createdRef = useRef(false)

  useEffect(() => {
    if (doc || createdRef.current) return
    createdRef.current = true
    const group = Group.create()
    group.makePublic()
    const newDoc = MarkdownDoc.create({ content: defaultMarkdown }, { owner: group })
    setDoc(newDoc)
    const url = new URL(window.location.href)
    url.searchParams.set('id', newDoc.$jazz.id)
    window.history.replaceState(null, '', url.toString())
  }, [doc])

  useEffect(() => {
    if (!doc) return
    if (markdown === doc.content) return
    const timeout = setTimeout(() => {
      doc.$jazz.set('content', markdown)
    }, 300)
    return () => clearTimeout(timeout)
  }, [markdown, doc])

  const shareUrl = doc
    ? `${window.location.origin}${window.location.pathname}?id=${doc.$jazz.id}`
    : ''

  const handleCopy = async () => {
    if (!shareUrl) return
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
        <button
          className="copy-btn"
          onClick={handleCopy}
          disabled={!shareUrl}
        >
          {copied ? 'Copied!' : 'Copy Shareable URL'}
        </button>
      </div>
    </div>
  )
}
