import { ChakraProvider } from '@chakra-ui/react'
import type { FC, PropsWithChildren } from 'react'
import { system } from 'app/client/theme'

export const UiProvider: FC<PropsWithChildren> = ({ children }) => (
  <ChakraProvider value={system}>{children}</ChakraProvider>
)
