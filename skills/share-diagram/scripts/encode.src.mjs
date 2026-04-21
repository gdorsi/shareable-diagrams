import { readFileSync, realpathSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { shareableDiagramsApp } from '../../../src/lib/schema.ts'
import { createScriptDb } from './identity-store.src.mjs'
import { issueGrantCode } from './grant-code-store.src.mjs'

async function readStdin(stdin) {
  const chunks = []
  for await (const chunk of stdin) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  return Buffer.concat(chunks).toString('utf8')
}

export async function readMarkdown(argv = process.argv.slice(2), stdin = process.stdin) {
  const raw = argv.includes('--raw')
  const withGrant = argv.includes('--grant')
  const filePath = argv.find((arg) => !arg.startsWith('--'))

  const markdown = filePath ? readFileSync(resolve(filePath), 'utf8') : await readStdin(stdin)

  if (!markdown.trim()) {
    throw new Error('no markdown provided (via file arg or stdin)')
  }

  return { markdown, raw, withGrant }
}

export async function publishMarkdown({
  markdown,
  raw,
  withGrant,
  deps = {
    createScriptDb,
    issueGrantCode,
  },
}) {
  const { createScriptDb: createDb = createScriptDb, issueGrantCode: issueGrantCodeFn = issueGrantCode } =
    deps
  const { db, ownerId, config } = await createDb()
  try {
    const inserted = await db.insertDurable(
      shareableDiagramsApp.documents,
      {
        ownerId,
        content: markdown,
      },
      { tier: 'global' },
    )

    const shareUrl = `${config.shareBaseUrl}?id=${inserted.id}`
    const grantUrl = withGrant ? `${shareUrl}#grantCode=${await issueGrantCodeFn({ ownerId })}` : null

    return {
      documentId: inserted.id,
      shareUrl,
      grantUrl,
      rawOutput: raw ? inserted.id : shareUrl,
    }
  } finally {
    if (typeof db.shutdown === 'function') {
      await db.shutdown()
    }
  }
}

export async function main({
  argv = process.argv.slice(2),
  stdin = process.stdin,
  stdout = process.stdout,
  deps = {},
} = {}) {
  const readMarkdownFn = deps.readMarkdown ?? readMarkdown
  const publishMarkdownFn = deps.publishMarkdown ?? publishMarkdown
  const { markdown, raw, withGrant } = await readMarkdownFn(argv, stdin)
  const result = await publishMarkdownFn({ markdown, raw, withGrant, deps })

  stdout.write(`${result.rawOutput}\n`)
  if (result.grantUrl) {
    stdout.write(`${result.grantUrl}\n`)
  }
}

if (process.argv[1] && pathToFileURL(realpathSync(process.argv[1])).href === import.meta.url) {
  main().catch((error) => {
    process.stderr.write(`Error: ${error.stack ?? error.message ?? error}\n`)
    process.exit(1)
  })
}
