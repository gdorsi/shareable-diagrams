import { gzipSync } from 'node:zlib'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const BASE_URL = 'https://gdorsi.github.io/shareable-diagrams/'

function toBase64Url(buffer) {
  return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function encode(markdown) {
  const bytes = Buffer.from(markdown, 'utf-8')
  const compressed = gzipSync(bytes)
  return toBase64Url(compressed)
}

function getMarkdown() {
  const args = process.argv.slice(2)
  const rawFlag = args.indexOf('--raw')

  if (args.length === 0) {
    let data = ''
    process.stdin.setEncoding('utf-8')
    process.stdin.on('data', (chunk) => { data += chunk })
    process.stdin.on('end', () => {
      const hash = encode(data)
      output(hash, rawFlag !== -1)
    })
    return
  }

  const filePath = args[args[0] === '--raw' ? 1 : 0]
  if (!filePath) {
    process.stderr.write('Usage: encode.mjs [--raw] <file-or-stdin>\n')
    process.exit(1)
  }

  const markdown = readFileSync(resolve(filePath), 'utf-8')
  const hash = encode(markdown)
  output(hash, rawFlag !== -1)
}

function output(hash, raw) {
  if (raw) {
    process.stdout.write(hash)
  } else {
    process.stdout.write(BASE_URL + '#' + hash)
  }
  process.stdout.write('\n')
}

getMarkdown()
