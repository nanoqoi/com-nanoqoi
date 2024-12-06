import type { Preview } from '@storybook/react'
import { createRemixStub } from '@remix-run/testing'
import { UiProvider } from 'app/client/context/UiProvider'
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import i18nConfig from 'app/i18n.config'
import { themes } from '@storybook/theming'
import { withThemeByClassName } from '@storybook/addon-themes'

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

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#141417' },
        { name: 'Light', value: '#FFFFFF' },
      ],
      default: 'Dark',
    },
  },
  decorators: [
    withThemeByClassName({
      defaultTheme: 'dark',
      themes: { light: '', dark: 'dark' },
    }),
    (Story) => {
      const Stub = createRemixStub([
        {
          path: '/',
          Component: () => <Story />,
        },
      ])

      return (
        <UiProvider>
          <I18nextProvider i18n={i18next}>
            <Stub />
          </I18nextProvider>
        </UiProvider>
      )
    },
  ],
}

export default preview
