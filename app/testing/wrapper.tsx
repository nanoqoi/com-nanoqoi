import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import i18nConfig from 'app/i18n.config'
import { FC, PropsWithChildren, PropsWithRef } from 'react'
import { UiProvider } from 'app/client/context/UiProvider'
import { createRemixStub } from '@remix-run/testing'

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

export const wrapper: FC<PropsWithChildren> = ({ children }) => {
  const Stub = createRemixStub([
    {
      path: '/',
      Component: () => <>{children}</>,
    },
  ])

  return (
    <UiProvider>
      <I18nextProvider i18n={i18next}>
        <Stub />
      </I18nextProvider>
    </UiProvider>
  )
}
