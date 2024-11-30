import type { ChakraTheme } from '@chakra-ui/react'

export const theme = {
  config: {
    cssVarPrefix: 'nanoqoi',
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    bg: '#17181B',
    panel: '#ffffff',
    ui: '#16171A',
    accent: '#ECBCFF',
  },
  styles: {
    body: {
      cursor: 'none !important',
    },
  },
  layerStyles: {
    panel: {
      background: 'panel',
      color: 'ui',
      rounded: 8,
      padding: 4,
      shadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
    },
  },
  space: {
    full: '100%',
    half: '50%',
  },
  sizes: {
    full: '100%',
    half: '50%',
    panel: {
      main: {
        width: '376px',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        cursor: 'none !important',
      },
    },
  },
} satisfies Partial<ChakraTheme>
