import Backend from 'i18next-fs-backend'
import { resolve } from 'node:path'
import { RemixI18Next } from 'remix-i18next/server'
import i18nConfig, { getResolvePath } from 'app/i18n.config'

const i18next = new RemixI18Next({
  detection: {
    supportedLanguages: i18nConfig.supportedLngs,
    fallbackLanguage: i18nConfig.fallbackLng,
  },
  i18next: {
    ...i18nConfig,
    backend: {
      loadPath: resolve(getResolvePath()),
    },
  },
  plugins: [Backend],
})

export default i18next
