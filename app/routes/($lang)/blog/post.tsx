import { FC } from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Outlet, useLoaderData } from '@remix-run/react'
import { Box, Center, Heading, VStack } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { MDXComponents } from 'mdx/types'
import { LoaderFunctionArgs } from '@remix-run/node'
import { getPostByRequestUrl } from 'app/server/blog-posts.server'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const post = await getPostByRequestUrl(request.url)
  return {
    title: post.metadata.title,
  }
}

const components = {
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

const PostLayout: FC = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, auto)"
      gap={8}
    >
      <GridItem asChild colSpan={4} rowSpan={1}>
        <Heading as="h1" textStyle="blog.content.heading">
          {data.title}
        </Heading>
      </GridItem>
      <GridItem asChild colSpan={3} rowSpan={1}>
        <VStack align="start" gap={8}>
          <MDXProvider components={components}>
            <Outlet />
          </MDXProvider>
        </VStack>
      </GridItem>
      <GridItem asChild colSpan={1} rowSpan={1}>
        <VStack bg="accents.blue" flexShrink={0}>
          <Box w="full" h="120px" />
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default PostLayout
