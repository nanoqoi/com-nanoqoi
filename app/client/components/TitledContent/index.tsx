import { FC, PropsWithChildren } from 'react'
import { Heading, VStack } from '@chakra-ui/react'

export interface TitledContentProps extends PropsWithChildren {
  title: string
}

export const TitledContent: FC<TitledContentProps> = ({ title, children }) => (
  <VStack boxSize="full" align="start" gap={10}>
    <Heading as="h1" textStyle="content.heading">
      {title}
    </Heading>
    {children}
  </VStack>
)
