import { MDXComponents } from 'mdx/types'
import {
  PostBanner,
  PostBannerProps,
} from 'app/client/components/mdx/PostBanner'
import { PostBlurb, PostBlurbProps } from 'app/client/components/mdx/PostBlurb'
import { PostImage, PostImageProps } from 'app/client/components/mdx/PostImage'
import { MDXCustomMetadata } from '*.mdx'

export const components = (metadata: MDXCustomMetadata) =>
  ({
    Banner: (props: PostBannerProps) => (
      <PostBanner {...props} metadata={metadata} />
    ),
    Blurb: (props: PostBlurbProps) => (
      <PostBlurb {...props} metadata={metadata} />
    ),
    Image: (props: PostImageProps) => (
      <PostImage {...props} metadata={metadata} />
    ),
  }) satisfies MDXComponents
