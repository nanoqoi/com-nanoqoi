import { Column } from 'src/components/dynamic-profile-banner/Column'
import { Text } from 'src/components/dynamic-profile-banner/Text'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

const I_HEIGHT = 232
const I_WIDTH = 846

export const config = {
  runtime: 'experimental-edge',
}

const getRubikSemiBoldFont = fetch(
  new URL('../../../public/fonts/Rubik-SemiBold.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

const getRubikMediumFont = fetch(
  new URL('../../../public/fonts/Rubik-Medium.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

const handler = async (req: NextRequest) => {
  const RubikSemiBoldFont = await getRubikSemiBoldFont
  const RubikMediumFont = await getRubikMediumFont

  const query = req.nextUrl.searchParams

  if (!query.has('@')) {
    return new Response('Missing @', { status: 400 })
  }

  const randomIndex = Math.floor(Math.random() * 3)

  return new ImageResponse(
    (
      <Column
        style={{
          position: 'absolute',
          inset: 0,
          height: `${I_HEIGHT}px`,
          width: `${I_WIDTH}px`,
          padding: '32px 0 64px 0',
          color: 'white',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'Medium',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.2)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Refresh the webpage to see what else I do
        </Text>
        <Column
          style={{
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Medium',
              fontSize: '16px',
              lineHeight: '19px',
              color: 'rgba(255, 255, 255, 0.96)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            A versatile
            <span
              style={{
                marginLeft: '8px',
                color: ['#8070E3', '#dd4c6f', '#dd9a4c'][randomIndex],
              }}
            >
              {['developer', 'designer', 'enthusiast'][randomIndex]}
            </span>
          </Text>
          <Text
            style={{
              fontFamily: 'SemiBold',
              fontSize: '64px',
              lineHeight: '76px',
              color: 'rgb(255, 255, 255)',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }}
          >
            Synqat
          </Text>
        </Column>
      </Column>
    ),
    {
      height: I_HEIGHT,
      width: I_WIDTH,
      fonts: [
        {
          weight: 100,
          data: RubikSemiBoldFont,
          style: 'normal',
          name: 'SemiBold',
        },
        {
          weight: 100,
          data: RubikMediumFont,
          style: 'normal',
          name: 'Medium',
        },
      ],
      headers: {
        'content-type': 'image/png',
        'cache-control':
          'public, max-age=0, no-cache, no-store, must-revalidate',
      },
    },
  )
}

export default handler