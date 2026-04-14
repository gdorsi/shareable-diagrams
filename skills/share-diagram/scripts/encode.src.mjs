import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { startWorker } from 'jazz-tools/worker'
import { createWorkerAccount } from 'jazz-run/createWorkerAccount'
import { co, z, Group } from 'jazz-tools'

const BASE_URL = 'https://gdorsi.github.io/shareable-diagrams/'
const JAZZ_API_KEY = 'shareable-diagrams@jazz.tools'
const SYNC_SERVER = `wss://cloud.jazz.tools/?key=${JAZZ_API_KEY}`

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

  const { accountID, agentSecret } = await createWorkerAccount({
    name: 'shareable-diagram',
    peer: SYNC_SERVER,
  })

  const { shutdownWorker } = await startWorker({
    syncServer: SYNC_SERVER,
    accountID,
    accountSecret: agentSecret,
  })

  const group = Group.create()
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

main()
  .then(() => process.exit(0))
  .catch((err) => {
    process.stderr.write(`Error: ${err.stack ?? err.message ?? err}\n`)
    process.exit(1)
  })
