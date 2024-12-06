import { type FC } from 'react'
import { Box, chakra } from '@chakra-ui/react'

const OverlayEffect = chakra('div', {
  base: {
    pos: 'fixed',
    zIndex: 100,
    pointerEvents: 'none',
    userSelect: 'none',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    inset: 0,
  },
})

export const OverlayEffects: FC = () => (
  <>
    <OverlayEffect asChild>
      <Box
        bgImage="url(/assets/paper.png)"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPos="center"
        opacity={0.5}
        mixBlendMode="overlay"
      />
    </OverlayEffect>
    <OverlayEffect asChild>
      <Box
        bgImage="url(/assets/noise.png)"
        bgRepeat="repeat"
        bgSize="384px"
        opacity={0.2}
        mixBlendMode="color-dodge"
      />
    </OverlayEffect>
  </>
)
