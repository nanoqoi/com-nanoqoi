import { Center, Flex, VStack } from '@chakra-ui/react'
import { Header } from 'app/client/components/Header'
import { Outlet } from '@remix-run/react'
import { FC } from 'react'

export interface DynamicLayoutProps {
  fill?: boolean
}

export const DynamicLayout: FC<DynamicLayoutProps> = ({ fill }) => {
  const height = fill ? 'full' : 'auto'

  return (
    <Center w="full" h={height}>
      <VStack w="full" h={height} gap={6} p={6} maxW="maxContentWidth">
        <Header />
        <Flex as="main" w="full" h={height}>
          <Outlet />
        </Flex>
      </VStack>
    </Center>
  )
}
