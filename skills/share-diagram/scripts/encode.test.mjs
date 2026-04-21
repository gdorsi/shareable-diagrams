import { execFileSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'

function runNodeModule(source) {
  return execFileSync('node', ['--input-type=module', '-e', source], {
    cwd: process.cwd(),
    encoding: 'utf8',
  })
}

function jsonFromNode(source) {
  return JSON.parse(runNodeModule(source))
}

describe('readMarkdown', () => {
  test('parses raw and grant flags from argv', () => {
    const tempDir = mkdtempSync('/tmp/shareable-diagrams-')
    const filePath = join(tempDir, 'input.md')
    writeFileSync(filePath, '# From file\n')

    try {
      const result = jsonFromNode(`
        import { readMarkdown } from './skills/share-diagram/scripts/encode.src.mjs'

        const result = await readMarkdown(['--raw', '--grant', ${JSON.stringify(filePath)}], {
          async *[Symbol.asyncIterator]() {},
        })

        process.stdout.write(JSON.stringify(result))
      `)

      expect(result).toEqual({
        markdown: '# From file\n',
        raw: true,
        withGrant: true,
      })
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('reads markdown from stdin when no path is provided', () => {
    const result = jsonFromNode(`
      import { readMarkdown } from './skills/share-diagram/scripts/encode.src.mjs'

      const stdin = (async function* () {
        yield Buffer.from('# From stdin\\n')
      })()

      const result = await readMarkdown(['--grant'], stdin)
      process.stdout.write(JSON.stringify(result))
    `)

    expect(result).toEqual({
      markdown: '# From stdin\n',
      raw: false,
      withGrant: true,
    })
  })
})

describe('publishMarkdown', () => {
  test('waits for a durable insert and shuts the db down', () => {
    const result = jsonFromNode(`
      import { publishMarkdown } from './skills/share-diagram/scripts/encode.src.mjs'

      const events = []
      let resolveInsert
      let grantIssued = false
      const insertCalls = []

      const db = {
        insertDurable: (table, data, options) => {
          insertCalls.push({
            hasTable: Boolean(table),
            data,
            options,
          })

          return new Promise((resolve) => {
            resolveInsert = () => {
              events.push('insert-resolved')
              resolve({ id: 'doc_1', ownerId: 'script-user', content: '# Hello' })
            }
          })
        },
        shutdown: async () => {
          events.push('shutdown')
        },
      }

      const publishPromise = publishMarkdown({
        markdown: '# Hello',
        raw: false,
        withGrant: true,
        deps: {
          createScriptDb: async () => ({
            db,
            ownerId: 'script-user',
            config: { shareBaseUrl: 'https://gdorsi.github.io/shareable-diagrams/' },
          }),
          issueGrantCode: async () => {
            grantIssued = true
            events.push('grant-issued')
            return 'grant_123'
          },
        },
      })

      await Promise.resolve()
      events.push(grantIssued ? 'grant-before-insert' : 'grant-not-yet')
      resolveInsert()
      const result = await publishPromise

      process.stdout.write(JSON.stringify({ result, events, insertCalls }))
    `)

    expect(result.result).toEqual({
      documentId: 'doc_1',
      shareUrl: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
      grantUrl: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1#grantCode=grant_123',
      rawOutput: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
    })
    expect(result.events).toEqual(['grant-not-yet', 'insert-resolved', 'grant-issued', 'shutdown'])
    expect(result.insertCalls).toEqual([
      {
        hasTable: true,
        data: {
          ownerId: 'script-user',
          content: '# Hello',
        },
        options: { tier: 'global' },
      },
    ])
  })
})

describe('main', () => {
  test('prints the share URL and grant URL on separate lines', () => {
    const result = jsonFromNode(`
      import { main } from './skills/share-diagram/scripts/encode.src.mjs'

      const writes = []

      await main({
        deps: {
          readMarkdown: async () => ({
            markdown: '# Hello',
            raw: false,
            withGrant: true,
          }),
          publishMarkdown: async () => ({
            documentId: 'doc_1',
            shareUrl: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
            grantUrl: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1#grantCode=grant_123',
            rawOutput: 'https://gdorsi.github.io/shareable-diagrams/?id=doc_1',
          }),
        },
        stdout: {
          write(chunk) {
            writes.push(chunk)
          },
        },
      })

      process.stdout.write(JSON.stringify({ writes }))
    `)

    expect(result.writes).toEqual([
      'https://gdorsi.github.io/shareable-diagrams/?id=doc_1\n',
      'https://gdorsi.github.io/shareable-diagrams/?id=doc_1#grantCode=grant_123\n',
    ])
  })
})
