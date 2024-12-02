import { FC } from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Outlet } from '@remix-run/react'
import { Box, Center, Heading, VStack } from '@chakra-ui/react'
import { MDXComponents } from 'mdx/types'

const components = {
  h1: (props) => (
    <Heading as="h1" textStyle="blog.content.heading" {...props} />
  ),
  Banner: (props) => (
    <Center w="full" minH="320px" pos="relative">
      <Box
        w="full"
        h="full"
        pos="absolute"
        top={0}
        left={0}
        right={0}
        bg={`url(${props.src}) black 50% / cover no-repeat`}
      />
    </Center>
  ),
  Blurb: (props) => (
    <Heading
      as="h2"
      textStyle="blog.content.blurb"
      color="whiteAlpha.700"
      {...props}
    />
  ),
} satisfies MDXComponents

const PostLayout: FC = () => (
  <VStack align="start" gap={8}>
    <MDXProvider components={components}>
      <Outlet />
    </MDXProvider>
  </VStack>
)

export default PostLayout
