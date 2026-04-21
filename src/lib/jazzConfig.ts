import type { DbConfig } from 'jazz-tools'
import { resolveSharedConfig } from './sharedConfig'

const sharedConfig = resolveSharedConfig(import.meta.env)

export const browserSharedConfig = sharedConfig

export const browserDbConfig: DbConfig = {
  appId: sharedConfig.appId,
  serverUrl: sharedConfig.serverUrl,
  runtimeSources: {
    baseUrl: new URL(import.meta.env.BASE_URL, window.location.origin).toString(),
  },
}
