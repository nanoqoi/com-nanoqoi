import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { MDXCustomMetadata } from '*.mdx'

const BLOG_POSTS_BASE_PATH = 'app/routes/($lang)/__auto/blog/post'

export const getPostByRequestUrl = async (requestUrl: string) => {
  const url = new URL(requestUrl)
  const path = url.pathname.replace('/blog/post/', '')
  const fullImportPath = `../../${BLOG_POSTS_BASE_PATH}/${path}.mdx`
  /* @vite-ignore */
  return (await import(fullImportPath)) as {
    default: any
    metadata: MDXCustomMetadata
  }
}

export const getPostsInDirectoryRecursively = async (
  base: string = BLOG_POSTS_BASE_PATH,
) => {
  const paths: MDXCustomMetadata[] = []

  const dir = await readdir(resolve(base))

  if (!dir.length) {
    return paths
  }

  for (const path of dir) {
    const newBase = `../../${base}/${path}`

    if (path.endsWith('.mdx')) {
      /* @vite-ignore */
      const mdx = (await import(newBase)) as {
        default: any
        metadata: MDXCustomMetadata
      }

      paths.push(mdx.metadata)
    } else {
      const subPaths = await getPostsInDirectoryRecursively(newBase)
      paths.push(...subPaths)
    }
  }

  return paths.filter((meta) => meta.visibility !== 'unlisted')
}
