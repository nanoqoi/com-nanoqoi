import { config } from 'dotenv'
import * as blob from '@vercel/blob'
import { readdir, readFile, writeFile } from 'node:fs/promises'

import { resolve } from 'node:path'

const BASE_PATH = resolve(process.cwd(), 'public', 'locales')

config({
  path: ['.env.local', '.env'],
})

const locales = await readdir(BASE_PATH)

const dynamicTranslationUrls: Record<string, any> = {}

for await (const locale of locales) {
  const localePath = resolve(BASE_PATH, locale)
  const files = await readdir(localePath)
  const localeFile: Record<string, any> = {}

  for (const file of files) {
    const filePath = resolve(localePath, file)
    const content = await readFile(filePath, 'utf-8')
    localeFile[file.replace('.json', '')] = JSON.parse(content)
  }

  const { url, downloadUrl } = await blob.put(
    `locales/${locale}.json`,
    JSON.stringify(localeFile),
    {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
    },
  )

  dynamicTranslationUrls[locale] = url

  console.log('Uploaded', `locales/${locale}`)
}

await writeFile(
  resolve(process.cwd(), 'app', 'dynamic.translations.json'),
  JSON.stringify(dynamicTranslationUrls),
)

console.log('Updated dynamic translations')
