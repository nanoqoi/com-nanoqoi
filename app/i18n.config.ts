import type { InitOptions } from 'i18next'

export const getResolvePath = () =>
  process.env.NODE_ENV === 'development'
    ? './public/locales/{{lng}}/{{ns}}.json'
    : './locales/{{lng}}/{{ns}}.json'

export default {
  supportedLngs: ['en', 'irl'],
  fallbackLng: 'en',
  fallbackNS: 'generic',
  debug: true,
} satisfies Omit<InitOptions<object>, 'react' | 'detection'>
