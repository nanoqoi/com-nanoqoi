import { MDXCustomMetadata } from '*.mdx'

export interface MDXScopedProps {
  metadata: MDXCustomMetadata
}

export const getRelativePostPath = (path: string, slug: string) => {
  return path.startsWith('@')
    ? `/assets/blog/posts/${slug}` + path.slice(1)
    : path
}

export const getRelativeBannerSrc = (metadata: MDXCustomMetadata) =>
  getRelativePostPath(metadata.bannerSrc, metadata.slug)
