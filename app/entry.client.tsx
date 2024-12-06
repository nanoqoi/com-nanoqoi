import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import i18nConfig from 'app/i18n.config'
import { ClientCacheProvider } from './emotion/emotion-client'
import { UiProvider } from 'app/client/context/UiProvider'

async function hydrate() {
  await i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
      ...i18nConfig,
      ns: 'generic',
      backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
      detection: {
        order: ['htmlTag'],
        caches: [],
      },
    })

  startTransition(() => {
    hydrateRoot(
      document,
      <I18nextProvider i18n={i18next}>
        <ClientCacheProvider>
          <UiProvider>
            <StrictMode>
              <RemixBrowser />
            </StrictMode>
          </UiProvider>
        </ClientCacheProvider>
      </I18nextProvider>,
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}
