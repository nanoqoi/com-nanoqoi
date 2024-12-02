import type { InitOptions } from 'i18next'

export default {
  supportedLngs: ['en', 'aaa'],
  fallbackLng: 'en',
  fallbackNS: 'generic',
} satisfies Omit<InitOptions<object>, 'react' | 'detection'>
