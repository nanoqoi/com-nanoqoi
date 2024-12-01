import { defineTokens } from '@chakra-ui/react'

export const fonts = defineTokens.fonts({
  heading: {
    value:
      '"Climate Crisis", "Twemoji", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  body: {
    value:
      '"Instrument Sans", "Twemoji", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  mono: {
    value:
      'SFMono-Regular, "Twemoji", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
})
