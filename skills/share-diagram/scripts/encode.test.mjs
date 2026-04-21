import { execFileSync } from 'node:child_process'
import { describe, expect, test } from 'vitest'

function publishMarkdownInNode({ markdown, raw, withGrant }) {
  const result = execFileSync(
    'node',
    [
      '--input-type=module',
      '-e',
      `
        import { publishMarkdown } from './skills/share-diagram/scripts/encode.src.mjs'

        const result = await publishMarkdown({
          markdown: ${JSON.stringify(markdown)},
          raw: ${JSON.stringify(raw)},
          withGrant: ${JSON.stringify(withGrant)},
          deps: {
            createScriptDb: async () => ({
              db: {
                insert: () => ({
                  value: { id: 'doc_1', ownerId: 'script-user', content: ${JSON.stringify(markdown)} },
                }),
              },
              ownerId: 'script-user',
              config: { shareBaseUrl: 'https://gdorsi.github.io/shareable-diagrams/' },
            }),
            issueGrantCode: async () => 'grant_123',
          },
        })

        process.stdout.write(JSON.stringify(result))
      `,
    ],
    {
      cwd: process.cwd(),
      encoding: 'utf8',
    },
  )

  return JSON.parse(result)
}

describe('publishMarkdown', () => {
  test('returns the normal share URL by default', () => {
    const result = publishMarkdownInNode({
      markdown: '# Hello',
      raw: false,
      withGrant: false,
    })

    expect(result).toEqual({
      documentId: 'doc_1',
      shareUrl: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
      grantUrl: null,
      rawOutput: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
    })
  })

  test('adds a fragment-based grant URL when requested', () => {
    const result = publishMarkdownInNode({
      markdown: '# Hello',
      raw: false,
      withGrant: true,
    })

    expect(result).toEqual({
      documentId: 'doc_1',
      shareUrl: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
      grantUrl: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1#grantCode=grant_123',
      rawOutput: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
    })
  })
})
