import { Column } from 'src/components/dynamic-profile-banner/Column'
import { Text } from 'src/components/dynamic-profile-banner/Text'
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { Row } from 'src/components/dynamic-profile-banner/Row'

const I_HEIGHT = 232
const I_WIDTH = 546

export const config = {
  runtime: 'experimental-edge',
}

const fetchUserDetails = async (userDiscordId: string) => {
  const res = await fetch(
    `https://discord.com/api/v10/users/${userDiscordId}`,
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_CLIENT_TOKEN}`,
      },
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch user details')
  }

  return (await res.json()) as any
}

const getRubikMediumFont = fetch(
  new URL('../../../public/fonts/rubik/Rubik-Medium.ttf', import.meta.url),
).then((res) => res.arrayBuffer())

const getNewRodinFont = fetch(
  new URL(
    '../../../public/fonts/new-rodin/FOTNewRodin Pro B.otf',
    import.meta.url,
  ),
).then((res) => res.arrayBuffer())

const handler = async (req: NextRequest) => {
  const RubikMediumFont = await getRubikMediumFont
  const NewRodinFont = await getNewRodinFont

  const query = req.nextUrl.searchParams

  if (!query.has('id')) {
    return new Response("Missing user's Discord ID.", { status: 400 })
  }

  const getQueryColor = (key: string) => {
    const value = query.get(key)

    if (value && value.match(/^([0-9A-F]{3}){1,2}$/i)) {
      return `#${value}`
    }

    return value
  }

  const settings = {
    id: query.get('id')!,
    bg: getQueryColor('bg') ?? '#383147',
    ui: getQueryColor('ui') ?? '#ffffff',
    brand: getQueryColor('brand') ?? '#ffb7f8',
    border: getQueryColor('border') ?? 'rgba(255, 255, 255, 0.1)',
  }

  const user = await fetchUserDetails(settings.id)
  const loves = await fetch(
    req.nextUrl.origin + '/api/show-love?respond=1',
  ).then((r) => r.json().then((j) => j.loves))

  return new ImageResponse(
    (
      <Column
        style={{
          position: 'absolute',
          inset: 0,
          height: `${I_HEIGHT}px`,
          width: `${I_WIDTH}px`,
          padding: '16px',
          color: settings.ui,
          fontFamily: 'Rubik',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: settings.bg,
          borderRadius: '8px',
          border: `1px solid ${settings.border}`,
        }}
      >
        <Column
          style={{
            alignItems: 'center',
          }}
        >
          <Column
            style={{
              alignItems: 'center',
            }}
          >
            <img
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
              style={{
                background: 'rgba(0, 0, 0, 0.1)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
            <Text
              style={{
                fontSize: '32px',
                fontFamily: 'FOT',
                lineHeight: '120%',
                letterSpacing: '-2%',
                marginTop: '8px',
              }}
            >
              <Text style={{ color: settings.brand }}>[</Text>
              <Text>{user.username.toLowerCase()}</Text>
              <Text style={{ color: settings.brand }}>]</Text>
            </Text>
          </Column>
          <Text
            style={{
              marginTop: '8px',
              fontSize: '20px',
              fontWeight: 200,
              fontFamily: 'Rubik',
            }}
          >
            <Text>Designer</Text>
            <Text style={{ color: settings.brand, margin: '0 4px' }}>•</Text>
            <Text>Developer</Text>
            <Text style={{ color: settings.brand, margin: '0 4px' }}>•</Text>
            <Text>Professional Sleeper</Text>
          </Text>
        </Column>
        <Row
          style={{
            alignItems: 'center',
          }}
        >
          <img
            src={`${req.nextUrl.origin}/icons/favorite_24px.png`}
            style={{
              width: '24px',
              height: '24px',
            }}
          />
          <Text
            style={{
              fontSize: '20px',
              fontWeight: 200,
              marginLeft: '4px',
            }}
          >
            {loves.toLocaleString()}
          </Text>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '6px 12px',
              marginLeft: '16px',
            }}
          >
            Click me to Show Love
          </div>
        </Row>
        <img
          src={`${req.nextUrl.origin}/synqat-bg.png`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Column>
    ),
    {
      statusText: 'HELLO!',
      status: 200,
      emoji: 'twemoji',
      height: I_HEIGHT,
      width: I_WIDTH,
      fonts: [
        {
          weight: 200,
          data: RubikMediumFont,
          style: 'normal',
          name: 'Rubik',
        },
        {
          weight: 100,
          data: NewRodinFont,
          style: 'normal',
          name: 'FOT',
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
