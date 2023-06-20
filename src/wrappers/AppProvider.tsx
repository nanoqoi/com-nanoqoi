import { ChakraProvider } from '@chakra-ui/provider'
import { theme } from 'src/theme'
import { CursorProvider } from 'src/components/Cursor'

export const AppProvider: FCWithChildren = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CursorProvider>{children}</CursorProvider>
  </ChakraProvider>
)
