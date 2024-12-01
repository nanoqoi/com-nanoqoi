import {
  AppLoadContext,
  createReadableStreamFromReadable,
  EntryContext,
} from '@remix-run/node'
import { RemixServer } from '@remix-run/react'
import { isbot } from 'isbot'
import { createInstance } from 'i18next'
import i18nextServer from 'app/server/i18next.server'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import Backend from 'i18next-fs-backend'
import i18nConfig from 'app/i18n.config'
import { resolve } from 'node:path'
import { PassThrough } from 'node:stream'

import { renderToPipeableStream } from 'react-dom/server'

const ABORT_DELAY = 5000

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext,
) {
  const callbackName = isbot(request.headers.get('user-agent'))
    ? 'onAllReady'
    : 'onShellReady'

  const instance = createInstance()
  const lng = await i18nextServer.getLocale(request)
  const ns = i18nextServer.getRouteNamespaces(remixContext)

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18nConfig,
      lng,
      ns,
      backend: { loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json') },
    })

  return new Promise((resolve, reject) => {
    let didError = false

    const { pipe, abort } = renderToPipeableStream(
      <I18nextProvider i18n={instance}>
        <RemixServer context={remixContext} url={request.url} />
      </I18nextProvider>,
      {
        [callbackName]: () => {
          let body = new PassThrough()
          const stream = createReadableStreamFromReadable(body)

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          )

          pipe(body)
        },
        onShellError(error: unknown) {
          reject(error)
        },
        onError(error: unknown) {
          didError = true

          console.error(error)
        },
      },
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
