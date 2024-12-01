import 'app/root.sass'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { FC, PropsWithChildren } from 'react'
import { withEmotionCache } from '@emotion/react'
import { useInjectStyles } from 'app/emotion/emotion-client'
import { UiProvider } from 'app/client/context/UiProvider'
import { OverlayEffects } from 'app/client/components/OverlayEffects'

export const Layout: FC<PropsWithChildren> = withEmotionCache(
  ({ children }, cache) => {
    useInjectStyles(cache)

    return (
      <html lang="en" suppressHydrationWarning className="dark">
        <head>
          <meta charSet="utf-8 " />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, scale=1"
          />
          <Meta />
          <Links />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    )
  },
)

const Root: FC = () => (
  <UiProvider>
    <Outlet />
    <OverlayEffects />
  </UiProvider>
)

export default Root
