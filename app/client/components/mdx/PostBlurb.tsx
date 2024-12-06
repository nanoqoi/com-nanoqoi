import { FC, PropsWithChildren } from 'react'
import { Heading } from '@chakra-ui/react'

export interface PostBlurbProps extends PropsWithChildren {}

export const PostBlurb: FC<PostBlurbProps> = ({ children }) => (
  <Heading as="h2" textStyle="blog.content.blurb" color="whiteAlpha.700">
    {children}
  </Heading>
)
