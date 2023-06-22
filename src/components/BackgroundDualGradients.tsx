import { Box, HStack } from '@chakra-ui/layout'
import { Particles } from 'src/components/Particles'

export const BackgroundDualGradients: FC = () => (
  <HStack
    pos="fixed"
    inset={0}
    top={0}
    left={0}
    right={0}
    bottom={0}
    boxSize="full"
    spacing={0}
  >
    <Box
      h="100vh"
      w="50vw"
      bgImg="linear-gradient(218.31deg, #17181B 0%, #0E0D22 100%)"
      pos="relative"
    >
      <Particles />
    </Box>
    <Box
      h="100vh"
      w="50vw"
      bgImg="linear-gradient(165.31deg, #ECBCFF 0%, #5D6DCC 100%)"
    />
  </HStack>
)
