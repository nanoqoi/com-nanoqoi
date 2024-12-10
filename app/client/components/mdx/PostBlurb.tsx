import { FC, PropsWithChildren } from 'react'
import { Heading } from '@chakra-ui/react'
import { MDXScopedProps } from 'app/client/components/mdx/utils'

export interface PostBlurbProps extends PropsWithChildren<MDXScopedProps> {}

export const PostBlurb: FC<PostBlurbProps> = ({ children }) => (
  <Heading as="h2" textStyle="blog.content.blurb" color="whiteAlpha.700">
    {children}
  </Heading>
)
