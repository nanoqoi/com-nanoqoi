import { NextApiHandler } from 'next'

const gfetch =
  (method: 'GET' | 'POST') => async (path: string, body?: object) => {
    const init: RequestInit = {
      method,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }

    if (method === 'POST') {
      init.body = JSON.stringify(body)
    }

    const res = await fetch(`https://api.github.com/${path}`, init)

    if (!res.ok) {
      throw new Error(`Failed to fetch ${path}`)
    }

    return res.json()
  }

const gget = gfetch('GET')
const gpost = gfetch('POST')

const handler: NextApiHandler = async (req, res) => {
  const starredGists = await gget('gists')
  let gist = starredGists.find((gist: any) => !!gist.files['loves'])
  if (!gist) {
    gist = await gpost('gists', {
      public: true,
      files: {
        loves: {
          content: '0',
        },
      },
    })
  }

  const content = await fetch(gist.files['loves'].raw_url).then((res) =>
    res.text(),
  )

  const loves = parseInt(content ?? '0', 10)

  if (req.query.respond === '1') {
    return res.json({ loves })
  }

  await gpost(`gists/${gist.id}`, {
    public: true,
    files: {
      loves: {
        content: (loves + 1).toString(),
      },
    },
  })

  // redirect to previous location
  if (req.headers.referer) {
    return res.redirect(req.headers.referer)
  }

  return res.json({ 'new-loves': loves + 1 })
}

export default handler
