import { FC } from 'react'

import { MDXProvider } from '@mdx-js/react'
import { Outlet, useLoaderData } from '@remix-run/react'
import { Grid, GridItem, Heading, VStack } from '@chakra-ui/react'
import { LoaderFunctionArgs } from '@remix-run/node'
import { getPostByRequestUrl } from 'app/server/blog-posts.server'
import { components } from 'app/client/components/mdx'

export async function loader({ request, params }: LoaderFunctionArgs) {
  const post = await getPostByRequestUrl(request.url)
  return {
    title: post?.metadata.title,
  }
}

const PostLayout: FC = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <Grid
      templateColumns="repeat(9, 1fr)"
      templateRows="repeat(2, auto)"
      gap={8}
    >
      <GridItem asChild colSpan={9} rowSpan={1}>
        <Heading as="h1" textStyle="blog.content.heading">
          {data.title}
        </Heading>
      </GridItem>
      <GridItem asChild colSpan={6} rowSpan={1} flexShrink={0}>
        <VStack align="start" gap={8}>
          <MDXProvider components={components}>
            <Outlet />
          </MDXProvider>
        </VStack>
      </GridItem>
      <GridItem asChild colSpan={3} rowSpan={1}>
        <VStack bg="accents.blue"></VStack>
      </GridItem>
    </Grid>
  )
}

export default PostLayout
