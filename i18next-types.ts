import 'i18next'

import generic from 'locales/en/generic.json'
import header from 'locales/en/header.json'
import landing from 'locales/en/landing.json'
import navigation from 'locales/en/navigation.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'generic'
    resources: {
      generic: typeof generic
      header: typeof header
      landing: typeof landing
      navigation: typeof navigation
    }
  }
}
