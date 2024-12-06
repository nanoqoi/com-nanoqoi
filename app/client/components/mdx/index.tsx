import { MDXComponents } from 'mdx/types'
import { PostBanner } from 'app/client/components/mdx/PostBanner'
import { PostBlurb } from 'app/client/components/mdx/PostBlurb'

export const components = {
  Banner: PostBanner,
  Blurb: PostBlurb,
} satisfies MDXComponents
