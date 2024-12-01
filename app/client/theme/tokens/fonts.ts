import { defineTokens } from '@chakra-ui/react'

export const fonts = defineTokens.fonts({
  heading: {
    value:
      '"Twemoji", "Climate Crisis", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  body: {
    value:
      '"Twemoji", "Instrument Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  mono: {
    value:
      'SFMono-Regular,"Twemoji",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
})
