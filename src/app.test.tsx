// @vitest-environment jsdom

import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import App from './App'

vi.mock('@comark/react', async () => {
  const React = await import('react')

  return {
    Comark: async ({ children, markdown }: { children?: string; markdown?: string }) =>
      React.createElement('div', { 'data-testid': 'async-comark' }, children ?? markdown),
    ComarkClient: ({ children, markdown }: { children?: string; markdown?: string }) =>
      React.createElement('div', { 'data-testid': 'client-comark' }, children ?? markdown),
  }
})

vi.mock('@comark/react/plugins/mermaid', () => ({
  default: () => ({}),
  Mermaid: () => null,
}))

vi.mock('@comark/react/plugins/highlight', () => ({
  default: () => ({}),
}))

vi.mock('@shikijs/themes/github-light', () => ({ default: {} }))
vi.mock('@shikijs/themes/github-dark', () => ({ default: {} }))

vi.mock('./lib/encode', () => ({
  encodeToHash: vi.fn(async () => 'encoded-hash'),
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn(() => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

Object.defineProperty(navigator, 'clipboard', {
  writable: true,
  value: {
    writeText: vi.fn(async () => undefined),
  },
})

describe('App', () => {
  test('renders the encoder without throwing in the client', async () => {
    window.location.hash = ''

    render(<App />)

    expect(await screen.findByText('Shareable Diagrams')).toBeTruthy()
  })
})
