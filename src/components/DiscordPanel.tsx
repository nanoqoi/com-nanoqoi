import { HStack, Text } from '@chakra-ui/layout'
import { MotionPanel } from 'src/components/Panel'
import { VStack } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'

export const DiscordPanel: FC = () => (
  <VStack w="panel.main.width" spacing={8} align="end">
    <Text fontWeight={700} fontSize={20} lineHeight="24px" color="ui">
      Discord
    </Text>
    <MotionPanel
      w="full"
      bgImg="linear-gradient(90deg, #5C6FCE 0%, #FD41A2 100%)"
    >
      <VStack boxSize="full" p={4} spacing={4} pos="relative">
        <Image w="full" h="136px" rounded={4} src="/banner.png" />
        <Image
          pos="absolute"
          bottom={4}
          left={20}
          src="/avatar-group.png"
          boxSize={104}
        />
        <HStack w="full" pl={128} spacing={16} color="panel">
          <Text fontSize={24} lineHeight="28px" fontWeight={700}>
            nanoqoi
          </Text>
          <Text opacity={0.4} fontSize={14} lineHeight="17px" fontWeight={600}>
            any/all
          </Text>
        </HStack>
      </VStack>
    </MotionPanel>
  </VStack>
)
