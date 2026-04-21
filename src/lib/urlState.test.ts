// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest'
import {
  buildShareUrl,
  clearGrantCode,
  pushEditMode,
  readDocumentId,
  readEditMode,
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

  test('replaceDocumentId with edit sets the edit flag', () => {
    replaceDocumentId('doc_123', { edit: true })
    expect(readDocumentId()).toBe('doc_123')
    expect(readEditMode()).toBe(true)
    expect(window.location.search).toBe('?id=doc_123&edit=1')
  })

  test('replaceDocumentId clears a previous edit flag when not requested', () => {
    window.history.replaceState(null, '', '/shareable-diagrams/?id=old&edit=1')
    replaceDocumentId('doc_456')
    expect(readEditMode()).toBe(false)
    expect(window.location.search).toBe('?id=doc_456')
  })

  test('pushEditMode toggles the edit flag without losing the id', () => {
    window.history.replaceState(null, '', '/shareable-diagrams/?id=doc_abc')
    pushEditMode(true)
    expect(window.location.search).toBe('?id=doc_abc&edit=1')
    pushEditMode(false)
    expect(window.location.search).toBe('?id=doc_abc')
  })

  test('buildShareUrl strips query/hash and keeps only the id', () => {
    window.history.replaceState(
      null,
      '',
      '/shareable-diagrams/?id=other&edit=1#grantCode=abc',
    )
    expect(buildShareUrl('doc_share')).toBe(
      `${window.location.origin}/shareable-diagrams/?id=doc_share`,
    )
  })

  test('reads and clears the grant code from the fragment', () => {
    window.history.replaceState(null, '', '/shareable-diagrams/?id=doc_123#grantCode=abc123')
    expect(readGrantCode()).toBe('abc123')
    clearGrantCode()
    expect(window.location.hash).toBe('')
  })
})
