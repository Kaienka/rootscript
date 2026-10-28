import * as Sentry from '@sentry/vue'
import type { App } from 'vue'
import { config } from '@/config'

export function initSentry(app: App) {
  if (!config.sentryDsn) return

  Sentry.init({
    app,
    dsn: config.sentryDsn,
    environment: config.appEnv, // production albo preview
  })
}
