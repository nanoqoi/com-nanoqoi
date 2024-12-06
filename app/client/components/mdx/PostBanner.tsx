import { FC } from 'react'
import { Box, Center } from '@chakra-ui/react'

export interface PostBannerProps {
  src: string
}

export const PostBanner: FC<PostBannerProps> = ({ src }) => (
  <Center w="full" minH="320px" pos="relative">
    <Box
      w="full"
      h="full"
      pos="absolute"
      top={0}
      left={0}
      right={0}
      bg={`url(${src}) black 50% / cover no-repeat`}
      role="banner"
    />
  </Center>
)
