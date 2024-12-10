import { FC } from 'react'
import { Box, Center } from '@chakra-ui/react'
import {
  getRelativePostPath,
  MDXScopedProps,
} from 'app/client/components/mdx/utils'

export interface PostBannerProps extends MDXScopedProps {
  src: string
}

export const PostBanner: FC<PostBannerProps> = ({ src, metadata }) => {
  const url = getRelativePostPath(src, metadata.slug)

  return (
    <Center w="full" minH="320px" pos="relative">
      <Box
        w="full"
        h="full"
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bg={`url(${url}) black 50% / cover no-repeat`}
        role="banner"
      />
    </Center>
  )
}
