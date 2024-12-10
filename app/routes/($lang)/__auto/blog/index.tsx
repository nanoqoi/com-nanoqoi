import { FC } from 'react'
import {
  AspectRatio,
  Flex,
  For,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { TitledContent } from 'app/client/components/TitledContent'
import { useTranslation } from 'react-i18next'
import { LoaderFunctionArgs } from '@vercel/remix'
import { useLoaderData } from '@remix-run/react'
import { posts } from 'app/server/blog-posts.server'
import { Link } from 'app/client/components/Link'
import {
  getRelativeBannerSrc,
  getRelativePostPath,
} from 'app/client/components/mdx/utils'

export const loader = async ({}: LoaderFunctionArgs) => {
  return {
    posts: posts
      .map((post) => post.metadata)
      .filter((meta) => meta.visibility !== 'unlisted'),
  }
}

export const handle = {
  i18n: 'blog',
}

const BlogPage: FC = () => {
  const data = useLoaderData<typeof loader>()
  const [t] = useTranslation('blog')

  return (
    <TitledContent title={t('heading')}>
      <Flex w="full" wrap="wrap" gap={8}>
        <For each={data.posts}>
          {(metadata, i) => (
            <Link
              key={i}
              w="calc(50% - 16px)"
              to={`/blog/post/${metadata.slug}`}
            >
              <HStack
                py={5}
                px={6}
                gap={6}
                w="full"
                bg="faded"
                rounded="1px"
                align="stretch"
              >
                <AspectRatio w="278px" h="full" ratio={4 / 3} flexShrink={0}>
                  <Image
                    rounded="1px"
                    boxSize="full"
                    objectFit="cover"
                    src={getRelativeBannerSrc(metadata)}
                  />
                </AspectRatio>
                <VStack align="start" boxSize="full" justify="space-between">
                  <VStack align="start" boxSize="full" gap={4}>
                    <Text>{metadata.title}</Text>
                    <Text>{metadata.blurb}</Text>
                  </VStack>
                  <Flex w="full" bg="alt">
                    <Text>2 hours ago</Text>
                  </Flex>
                </VStack>
              </HStack>
            </Link>
          )}
        </For>
      </Flex>
    </TitledContent>
  )
}

export default BlogPage
