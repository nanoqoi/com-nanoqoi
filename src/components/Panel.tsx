import type { Omit } from '@chakra-ui/utils'
import type { BoxProps } from '@chakra-ui/react'
import { Box } from '@chakra-ui/layout'
import type { MotionBoxProps } from 'src/components/Motion'
import { MotionBox } from 'src/components/Motion'

export const Panel: FC<Omit<BoxProps, 'layerStyle'>> = (props) => (
  <Box layerStyle="panel" {...props} />
)

export const MotionPanel: FC<Omit<MotionBoxProps, 'layerStyle'>> = (props) => (
  <MotionBox layerStyle="panel" {...props} />
)
