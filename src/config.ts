type AppEnv = 'development' | 'preview' | 'production'

const ALLOWED: AppEnv[] = ['development', 'preview', 'production']

function readAppEnv(): AppEnv {
  const value = import.meta.env.VITE_APP_ENV
  if (value === undefined) {
    // brak zmiennej: build produkcyjny = production, serwer deweloperski = development
    return import.meta.env.PROD ? 'production' : 'development'
  }
  if (!ALLOWED.includes(value)) {
    throw new Error(`Nieprawidłowe VITE_APP_ENV: "${value}". Dozwolone: ${ALLOWED.join(', ')}`)
  }
  return value
}

const appEnv = readAppEnv()

export const config = {
  appEnv,
  isProduction: appEnv === 'production',
  siteUrl: import.meta.env.VITE_SITE_URL ?? window.location.origin,
  sentryDsn: import.meta.env.VITE_SENTRY_DSN,
} as const
