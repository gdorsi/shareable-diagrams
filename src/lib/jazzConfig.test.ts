// @vitest-environment jsdom

import { describe, expect, test } from 'vitest'
import { browserDbConfig } from './jazzConfig'

describe('browserDbConfig', () => {
  test('does not override Jazz browser asset resolution', () => {
    expect(browserDbConfig.runtimeSources).toBeUndefined()
  })
})
