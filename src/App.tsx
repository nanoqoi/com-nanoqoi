import { Box, Center } from '@chakra-ui/layout'
import { BackgroundDualGradients } from 'src/components/BackgroundDualGradients'
import { AboutMePanel } from 'src/components/AboutMePanel'
import { useMediaQuery, VStack } from '@chakra-ui/react'
import { SynqatMainText } from 'src/components/SynqatMainText'
import { DiscordPanel } from 'src/components/DiscordPanel'
import { LayoutGroup } from 'framer-motion'

export const App: FC = () => {
  const [cutForMobile] = useMediaQuery('(min-width: 400px)', {
    fallback: false,
  })

  return (
    <LayoutGroup>
      <Box
        pos="fixed"
        top={0}
        left={0}
        opacity={0.7}
        boxSize="full"
        bgImg="/overlay.png"
        zIndex={100}
        pointerEvents="none"
        userSelect="none"
        blendMode="overlay"
      />
      <BackgroundDualGradients />
      <Center
        pos="fixed"
        zIndex={1}
        inset={0}
        top={0}
        left={0}
        right={0}
        bottom={0}
        boxSize="full"
      >
        <VStack spacing={16}>
          <SynqatMainText />
          <VStack spacing={64}>
            <AboutMePanel />
            {cutForMobile && <DiscordPanel />}
          </VStack>
        </VStack>
      </Center>
    </LayoutGroup>
  )
}
