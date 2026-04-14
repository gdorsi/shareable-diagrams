import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { startWorker } from 'jazz-tools/worker'
import { co, z, Group } from 'jazz-tools'

const BASE_URL = 'https://gdorsi.github.io/shareable-diagrams/'
const JAZZ_API_KEY = 'shareable-diagrams@jazz.tools'
const JAZZ_WORKER_ACCOUNT = 'co_zYM1ev8EU7vEznQGX7XZhP5iyDL'
const JAZZ_WORKER_SECRET =
  'sealerSecret_z8kk8YYEb3VnfiuMJSjAkv613Fxf6vNAGPDBuzjgVhqP7/signerSecret_z8h6NsKWmnzhAfrpXX6YTvtEHZgFAKGeZvNfcq8zwtyCn'

const MarkdownDoc = co.map({
  content: z.string(),
})

async function readMarkdown() {
  const args = process.argv.slice(2)
  const rawFlag = args.indexOf('--raw') !== -1
  const filePath = args.find((a) => a !== '--raw')

  let markdown
  if (filePath) {
    markdown = readFileSync(resolve(filePath), 'utf-8')
  } else {
    const chunks = []
    for await (const chunk of process.stdin) chunks.push(chunk)
    markdown = Buffer.concat(chunks).toString('utf-8')
  }

  if (!markdown.trim()) {
    process.stderr.write('Error: no markdown provided (via file arg or stdin)\n')
    process.exit(1)
  }

  return { markdown, rawFlag }
}

async function main() {
  const { markdown, rawFlag } = await readMarkdown()

  const { worker, shutdownWorker } = await startWorker({
    syncServer: `wss://cloud.jazz.tools/?key=${JAZZ_API_KEY}`,
    accountID: process.env.JAZZ_WORKER_ACCOUNT ?? JAZZ_WORKER_ACCOUNT,
    accountSecret: process.env.JAZZ_WORKER_SECRET ?? JAZZ_WORKER_SECRET,
  })

  const group = Group.create({ owner: worker })
  group.makePublic()
  const doc = MarkdownDoc.create({ content: markdown }, { owner: group })
  const id = doc.$jazz.id

  await shutdownWorker()

  if (rawFlag) {
    process.stdout.write(id + '\n')
  } else {
    process.stdout.write(`${BASE_URL}?id=${id}\n`)
  }
}

main().catch((err) => {
  process.stderr.write(`Error: ${err.stack ?? err.message ?? err}\n`)
  process.exit(1)
})
