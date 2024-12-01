import type { InitOptions } from 'i18next'

export default {
  supportedLngs: ['en', 'jp'],
  fallbackLng: 'en',
  fallbackNS: 'generic',
} satisfies Omit<InitOptions<object>, 'react' | 'detection'>
