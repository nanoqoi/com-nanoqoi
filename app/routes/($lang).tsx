import { FC } from 'react'
import { Center, Flex, VStack } from '@chakra-ui/react'
import { Outlet } from '@remix-run/react'
import { Header } from 'app/client/components/Header'

const RootLayout: FC = () => {
  return (
    <Center w="full" minH={0} minW={0}>
      <VStack w="full" gap={6} p={6} maxW="maxContentWidth">
        <Header />
        <Flex as="main" boxSize="full" minH={0}>
          <Outlet />
        </Flex>
      </VStack>
    </Center>
  )
}

export default RootLayout
