import { FC, PropsWithChildren } from 'react'
import { Heading, VStack } from '@chakra-ui/react'

export interface TitledContentProps extends PropsWithChildren {
  title: string
  blurb?: string
}

export const TitledContent: FC<TitledContentProps> = ({
  title,
  blurb,
  children,
}) => (
  <VStack boxSize="full" align="start" gap={10}>
    <Heading as="h1" textStyle="content.heading">
      {title}
    </Heading>
    {blurb && (
      <Heading
        as="h2"
        textStyle="blog.content.blurb"
        color="whiteAlpha.700"
        maxW="maxReadingWidth"
      >
        {blurb}
      </Heading>
    )}
    {children}
  </VStack>
)
