import { AppLoadContext, EntryContext } from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { createInstance } from 'i18next'
import i18nextServer from 'app/server/i18next.server'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Backend from 'i18next-fs-backend'
import i18nConfig, { getResolvePath } from 'app/i18n.config'
import { resolve } from 'node:path'
import { createEmotion } from 'app/emotion/emotion-server'

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  _loadContext: AppLoadContext,
) {
  const { renderToString, injectStyles } = createEmotion()

  const instance = createInstance()
  const forcedLocale = new URL(request.url).pathname.split('/')[1]
  const lng = i18nConfig.supportedLngs.includes(forcedLocale)
    ? forcedLocale
    : await i18nextServer.getLocale(request)
  const ns = i18nextServer.getRouteNamespaces(remixContext)

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18nConfig,
      lng,
      ns,
      backend: { loadPath: resolve(getResolvePath()) },
    })

  const html = renderToString(
    <I18nextProvider i18n={instance}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nextProvider>,
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response(`<!DOCTYPE html>${injectStyles(html)}`, {
    headers: responseHeaders,
    status: responseStatusCode,
  })
}
