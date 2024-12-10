import type { InitOptions } from 'i18next'

export default {
  supportedLngs: ['en', 'irl'],
  fallbackLng: 'en',
  fallbackNS: 'generic',
  debug: true,
} satisfies Omit<InitOptions<object>, 'react' | 'detection'>
