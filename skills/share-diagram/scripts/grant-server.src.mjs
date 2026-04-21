import http from 'node:http'
import { pathToFileURL } from 'node:url'
import { createScriptDb } from './identity-store.src.mjs'
import {
  finalizeGrantCode,
  releaseGrantCode,
  reserveGrantCode,
} from './grant-code-store.src.mjs'
import { isApprovedGrantOrigin } from '../../../src/lib/sharedConfig.ts'
import { shareableDiagramsApp } from '../../../src/lib/schema.ts'

function jsonResponse(status, payload, headers = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...headers,
    },
  })
}

function corsHeaders(origin) {
  return {
    'access-control-allow-origin': origin,
    'access-control-allow-credentials': 'true',
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
    'access-control-allow-private-network': 'true',
    vary: 'origin',
  }
}

function isGrantRoute(request) {
  const url = new URL(request.url)
  return url.pathname === '/grant-access'
}

function getRequestOrigin(request) {
  return request.headers.get('origin') ?? ''
}

async function readJsonBody(request) {
  const text = await request.text()
  if (!text.trim()) {
    return null
  }

  return JSON.parse(text)
}

function ensureApprovedOrigin(request) {
  const origin = getRequestOrigin(request)
  if (!origin || !isApprovedGrantOrigin(origin)) {
    return {
      ok: false,
      origin,
      response: jsonResponse(403, { error: 'grant origin not approved' }),
    }
  }

  return { ok: true, origin }
}

function mapGrantCodeError(error) {
  const message = error instanceof Error ? error.message : 'grant request failed'
  const status =
    message === 'grant code already used'
      ? 409
      : message === 'grant code expired'
        ? 410
        : message === 'grant code already reserved'
          ? 409
          : 400

  return { message, status }
}

export function createGrantServer({ db }) {
  if (!db || typeof db.upsertDurable !== 'function') {
    throw new Error('db with upsertDurable is required')
  }

  async function handle(request) {
    if (!isGrantRoute(request)) {
      return jsonResponse(404, { error: 'not found' })
    }

    const originCheck = ensureApprovedOrigin(request)
    if (!originCheck.ok) {
      return originCheck.response
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(originCheck.origin),
      })
    }

    let payload
    try {
      payload = await readJsonBody(request)
    } catch {
      return jsonResponse(400, { error: 'invalid grant request body' }, corsHeaders(originCheck.origin))
    }

    const browserUserId = payload && typeof payload.browserUserId === 'string' ? payload.browserUserId : ''
    const code = payload && typeof payload.code === 'string' ? payload.code : ''

    if (!browserUserId || !code) {
      return jsonResponse(400, { error: 'browserUserId and code are required' }, corsHeaders(originCheck.origin))
    }

    let reservation
    try {
      reservation = reserveGrantCode({
        code,
      })
    } catch (error) {
      const { message, status } = mapGrantCodeError(error)
      return jsonResponse(status, { error: message }, corsHeaders(originCheck.origin))
    }

    const grantId = `grant:${reservation.ownerId}:${browserUserId}`

    try {
      await db.upsertDurable(
        shareableDiagramsApp.documentWriteGrants,
        {
          ownerId: reservation.ownerId,
          granteeId: browserUserId,
        },
        {
          id: grantId,
        },
      )

      finalizeGrantCode({
        reservation,
      })
    } catch (error) {
      releaseGrantCode({
        reservation,
      })
      const { message } = mapGrantCodeError(error)
      return jsonResponse(500, { error: message }, corsHeaders(originCheck.origin))
    }

    return jsonResponse(
      200,
      {
        ok: true,
        id: grantId,
        ownerId: reservation.ownerId,
        browserUserId,
      },
      corsHeaders(originCheck.origin),
    )
  }

  async function listen(port = 43110, host = '127.0.0.1') {
    const server = http.createServer((req, res) => {
      void (async () => {
        try {
          const requestUrl = new URL(req.url ?? '/', `http://${req.headers.host ?? `${host}:${port}`}`)
          const chunks = []

          for await (const chunk of req) {
            chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
          }

          const body = chunks.length ? Buffer.concat(chunks) : undefined
          const requestInit = {
            method: req.method ?? 'GET',
            headers: req.headers,
          }
          if (body) {
            requestInit.body = body
            requestInit.duplex = 'half'
          }
          const request = new Request(requestUrl, requestInit)
          const response = await handle(request)

          res.statusCode = response.status
          response.headers.forEach((value, key) => {
            res.setHeader(key, value)
          })

          if (response.body) {
            const buffer = Buffer.from(await response.arrayBuffer())
            res.end(buffer)
          } else {
            res.end()
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : 'grant service failed'
          res.statusCode = 500
          res.setHeader('content-type', 'application/json; charset=utf-8')
          res.end(JSON.stringify({ error: message }))
        }
      })()
    })

    await new Promise((resolve) => {
      server.listen(port, host, resolve)
    })

    return server
  }

  return {
    handle,
    listen,
  }
}

async function main() {
  const { db } = await createScriptDb()
  const grantServer = createGrantServer({ db })
  await grantServer.listen(43110)
  process.stdout.write('grant server listening on http://127.0.0.1:43110\n')
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  main().catch((error) => {
    process.stderr.write(`Error: ${error.stack ?? error.message ?? error}\n`)
    process.exit(1)
  })
}
