import 'i18next'

import about from 'locales/en/about.json'
import blog from 'locales/en/blog.json'
import contact from 'locales/en/contact.json'
import generic from 'locales/en/generic.json'
import header from 'locales/en/header.json'
import landing from 'locales/en/landing.json'
import navigation from 'locales/en/navigation.json'
import projects from 'locales/en/projects.json'
import skills from 'locales/en/skills.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'generic'
    resources: {
      about: typeof about
      blog: typeof blog
      contact: typeof contact
      generic: typeof generic
      header: typeof header
      landing: typeof landing
      navigation: typeof navigation
      projects: typeof projects
      skills: typeof skills
    }
  }
}
