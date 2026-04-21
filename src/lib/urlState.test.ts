// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest'
import {
  clearGrantCode,
  readDocumentId,
  readGrantCode,
  replaceDocumentId,
} from './urlState'

describe('urlState', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/shareable-diagrams/')
  })

  test('reads and writes the document id in the query string', () => {
    replaceDocumentId('doc_123')
    expect(readDocumentId()).toBe('doc_123')
    expect(window.location.search).toBe('?id=doc_123')
  })

  test('reads and clears the grant code from the fragment', () => {
    window.history.replaceState(null, '', '/shareable-diagrams/?id=doc_123#grantCode=abc123')
    expect(readGrantCode()).toBe('abc123')
    clearGrantCode()
    expect(window.location.hash).toBe('')
  })
})
