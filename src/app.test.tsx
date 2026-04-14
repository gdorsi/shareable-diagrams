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

vi.mock('jazz-tools/react', () => ({
  JazzReactProvider: ({ children }: { children: React.ReactNode }) => children,
  useCoState: () => ({
    $isLoaded: false,
    $jazz: { loadingState: 'loading' },
  }),
}))

vi.mock('jazz-tools', () => ({
  co: {
    map: () => ({
      create: vi.fn(() => ({
        content: '',
        $jazz: { id: 'co_testdocid', set: vi.fn() },
      })),
    }),
  },
  z: { string: () => ({}) },
  Group: { create: vi.fn(() => ({ makePublic: vi.fn() })) },
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
  test('renders the encoder without throwing when no id is in the querystring', async () => {
    window.history.replaceState(null, '', '/')

    render(<App />)

    expect(await screen.findByText('Shareable Diagrams')).toBeTruthy()
  })
})
