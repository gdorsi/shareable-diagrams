import { useState } from 'react'
import { ComarkClient } from '@comark/react'
import mermaid from '@comark/react/plugins/mermaid'
import { Mermaid } from '@comark/react/plugins/mermaid'
import highlight from '@comark/react/plugins/highlight'
import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'
import { co } from 'jazz-tools'
import { MarkdownDoc } from './lib/schema'

const plugins = [
  mermaid(),
  highlight({ themes: { light: githubLight, dark: githubDark } }),
]

const components = { mermaid: Mermaid }

type LoadedDoc = co.loaded<typeof MarkdownDoc>

export default function Viewer({ doc }: { doc: LoadedDoc }) {
  const [copied, setCopied] = useState<'markdown' | 'url' | null>(null)

  const handleCopy = async (text: string, kind: 'markdown' | 'url') => {
    await navigator.clipboard.writeText(text)
    setCopied(kind)
    setTimeout(() => setCopied(null), 2000)
  }

  const content = doc.content

  return (
    <div className="viewer">
      <div className="viewer-toolbar">
        <button
          className="toolbar-btn"
          onClick={() => handleCopy(content, 'markdown')}
        >
          {copied === 'markdown' ? 'Copied!' : 'Copy Markdown'}
        </button>
        <button
          className="share-btn"
          onClick={() => handleCopy(window.location.href, 'url')}
        >
          {copied === 'url' ? 'Copied!' : 'Copy Share URL'}
        </button>
      </div>
      <div className="viewer-content">
        <ComarkClient plugins={plugins} components={components}>
          {content}
        </ComarkClient>
      </div>
    </div>
  )
}
