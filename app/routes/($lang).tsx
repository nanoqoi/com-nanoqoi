import { FC } from 'react'
import { Center, Flex, VStack } from '@chakra-ui/react'
import { Outlet } from '@remix-run/react'
import { Header } from 'app/client/components/Header'

const RootLayout: FC = () => {
  return (
    <Center boxSize="full">
      <VStack boxSize="full" gap={6} p={6} w="full" maxW="maxContentWidth">
        <Header />
        <Flex as="main" boxSize="full">
          <Outlet />
        </Flex>
      </VStack>
    </Center>
  )
}

export default RootLayout
