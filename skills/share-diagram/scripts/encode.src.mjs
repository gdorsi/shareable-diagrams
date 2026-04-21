import { readFileSync } from 'node:fs'
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
  const inserted = db.insert(shareableDiagramsApp.documents, {
    ownerId,
    content: markdown,
  }).value

  const shareUrl = `${config.shareBaseUrl}?id=${inserted.id}`
  const grantUrl = withGrant ? `${shareUrl}#grantCode=${await issueGrantCodeFn({ ownerId })}` : null

  return {
    documentId: inserted.id,
    shareUrl,
    grantUrl,
    rawOutput: raw ? inserted.id : shareUrl,
  }
}

export async function main() {
  const { markdown, raw, withGrant } = await readMarkdown()
  const result = await publishMarkdown({ markdown, raw, withGrant })

  process.stdout.write(`${result.rawOutput}\n`)
  if (result.grantUrl) {
    process.stdout.write(`${result.grantUrl}\n`)
  }
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    process.stderr.write(`Error: ${error.stack ?? error.message ?? error}\n`)
    process.exit(1)
  })
}
