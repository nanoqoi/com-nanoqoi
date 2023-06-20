import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import type {
  BoxProps,
  CenterProps,
  FlexProps,
  StackProps,
  TextProps,
} from '@chakra-ui/layout'
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/layout'
import type { ButtonProps } from '@chakra-ui/button'
import { Button } from '@chakra-ui/button'
import type { ImageProps } from '@chakra-ui/image'
import { Image } from '@chakra-ui/image'
import { forwardRef } from '@chakra-ui/system'

export const DEFAULT_DURATION = 0.85
export const DEFAULT_EASING = [0.04, 0.91, 0.6, 0.99]

export const transitions = {
  default: {
    ease: DEFAULT_EASING,
    duration: DEFAULT_DURATION,
  },
  medium: {
    ease: DEFAULT_EASING,
    duration: 0.4,
  },
  fast: {
    ease: DEFAULT_EASING,
    duration: 0.2,
  },
} satisfies Record<string, MotionProps['transition']>

export type MotionBoxProps = Omit<BoxProps, keyof MotionProps> & MotionProps
export type MotionTextProps = Omit<TextProps, keyof MotionProps> & MotionProps
export type MotionCenterProps = Omit<CenterProps, keyof MotionProps> &
  MotionProps

export const MotionBox = motion<MotionBoxProps>(Box as any)
export const MotionCenter = motion<MotionCenterProps>(Center as any)
export const MotionText = motion<MotionTextProps>(Text as any)
export const MotionFlex = motion<
  Omit<FlexProps, keyof MotionProps> & MotionProps
>(Flex as any)
export const MotionStack = motion<
  Omit<StackProps, keyof MotionProps> & MotionProps
>(Stack as any)
export const MotionButton = motion<
  Omit<ButtonProps, keyof MotionProps> & MotionProps
>(Button as any)
export const MotionImage = motion<
  Omit<ImageProps, keyof MotionProps> & MotionProps
>(Image as any)

export const MotionSpinner = forwardRef<MotionBoxProps, typeof MotionBox>(
  (props, ref) => (
    <MotionBox
      ref={ref}
      {...props}
      display="flex"
      transition={{ duration: 0.8, ease: 'linear', repeat: Infinity }}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
    />
  ),
)
