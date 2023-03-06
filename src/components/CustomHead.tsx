import Head from 'next/head'
import { theme } from 'src/constants'

export const CustomHead = () => (
  <Head>
    <title>Synqat シンカット</title>
    <meta name="description" content="Synqat シンカット" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <style>
      {`
        @font-face {
          font-family: 'New Rodin M';
          src: url('/fonts/new-rodin/FOTNewRodin Pro M.otf') format('otf');
        }
        body {
          cursor: none;
          background: ${theme.colors.background};
        }
      `}
    </style>
  </Head>
)
