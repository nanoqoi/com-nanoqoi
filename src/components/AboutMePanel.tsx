import { Box, Center, HStack, Text } from '@chakra-ui/layout'
import { MotionPanel } from 'src/components/Panel'
import { IconButton, Link, useMediaQuery, VStack } from '@chakra-ui/react'
import { TwitterIcon } from 'src/icons/TwitterIcon'
import { DiscordIcon } from 'src/icons/DiscordIcon'
import { GitHubIcon } from 'src/icons/GitHubIcon'
import { useCursorToSize } from 'src/components/Cursor'
import { ChevronIcon } from 'src/icons/ChevronIcon'
import { useState, useMemo, useRef, useEffect } from 'react'
import { MotionStack, transitions } from 'src/components/Motion'
import { AnimatePresence } from 'framer-motion'
import { Image } from '@chakra-ui/image'
import { TopggIcon } from 'src/icons/TopggIcon'
import { CensorBotIcon } from 'src/icons/CensorBotIcon'
import { FigmaIcon } from 'src/icons/FigmaIcon'
import { FigmaMaterialIcon } from 'src/icons/FigmaMaterialIcon'

const TRANSITION_OFFSET = 38

const MyDreamStack: FC<{ previousIndex: number }> = ({ previousIndex }) => {
  const fromLeft = previousIndex === 0 || previousIndex !== 2
  const [cutForMobile] = useMediaQuery('(min-width: 514px)', {
    fallback: false,
  })

  return (
    <MotionStack
      w={cutForMobile ? 'panel.main.width' : 'full'}
      maxW="panel.main.width"
      spacing={8}
      align="start"
      transition={transitions.default}
      initial={{
        opacity: 0,
        x: fromLeft ? TRANSITION_OFFSET : -TRANSITION_OFFSET,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: fromLeft ? -TRANSITION_OFFSET : TRANSITION_OFFSET,
      }}
    >
      <Text fontWeight={700} fontSize={20} lineHeight="24px" color="accent">
        Dream Stack
      </Text>
      <MotionPanel w="full">
        <Box py={8} px={10}>
          <Text fontWeight={600} fontSize={14} lineHeight="16.5px">
            A list of technologies I would like to learn/use in the future or
            have used in the past.
          </Text>
        </Box>
      </MotionPanel>
      <MotionPanel w="panel.main.width">
        <Center>
          <HStack py={8} px={10} spacing={0}>
            <Text fontWeight={600} fontSize={13}>
              Coming soon...
            </Text>
          </HStack>
        </Center>
      </MotionPanel>
    </MotionStack>
  )
}

const MyExperience: FC<{ previousIndex: number }> = ({ previousIndex }) => {
  const cursorSizer = useCursorToSize()
  const fromLeft = previousIndex === 2 || previousIndex === 0
  const [cutForMobile] = useMediaQuery('(min-width: 514px)', {
    fallback: false,
  })

  return (
    <MotionStack
      w={cutForMobile ? 'panel.main.width' : 'full'}
      maxW="panel.main.width"
      spacing={8}
      align="start"
      transition={transitions.default}
      initial={{
        opacity: 0,
        x: fromLeft ? TRANSITION_OFFSET : -TRANSITION_OFFSET,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: fromLeft ? -TRANSITION_OFFSET : TRANSITION_OFFSET,
      }}
    >
      <Text fontWeight={700} fontSize={20} lineHeight="24px" color="accent">
        Experience
      </Text>
      <MotionPanel w="full">
        <Box py={8} px={10}>
          <Text fontWeight={600} fontSize={14} lineHeight="16.5px">
            My experience professionally and personally.
          </Text>
        </Box>
      </MotionPanel>
      <MotionPanel w="full">
        <Center py={8} px={10}>
          <VStack w="full" align="start" spacing={8}>
            <VStack align="start" w="full">
              <Text fontWeight={600} fontSize={14} lineHeight="16.5px">
                Professionally as a developer:
              </Text>
              <HStack spacing={0}>
                <Link
                  href="https://top.gg"
                  rel="noopener external"
                  target="_blank"
                >
                  <IconButton
                    p={8}
                    icon={<TopggIcon boxSize={24} color="#ff3366" />}
                    aria-label="top.gg"
                    {...cursorSizer()}
                  />
                </Link>
                <Link
                  href="https://medal.tv"
                  rel="noopener external"
                  target="_blank"
                >
                  <IconButton
                    p={8}
                    icon={<Image src="/medal-logo.png" h={24} />}
                    aria-label="medal.tv"
                    {...cursorSizer()}
                  />
                </Link>
                <Link
                  href="https://rythm.fm"
                  rel="noopener external"
                  target="_blank"
                >
                  <IconButton
                    p={8}
                    icon={<Image src="/rythm.png" boxSize={24} />}
                    aria-label="rythm.fm"
                    {...cursorSizer()}
                  />
                </Link>
              </HStack>
            </VStack>
            <VStack align="start" w="full">
              <Text fontWeight={600} fontSize={14} lineHeight="16.5px">
                Personally as a developer:
              </Text>
              <HStack spacing={0}>
                <Link
                  href="https://github.com/synqat"
                  rel="noopener external"
                  target="_blank"
                >
                  <IconButton
                    p={8}
                    icon={<GitHubIcon boxSize={24} />}
                    aria-label="github.com/synqat"
                    {...cursorSizer()}
                  />
                </Link>
                <Link
                  href="https://censor.bot"
                  rel="noopener external"
                  target="_blank"
                >
                  <IconButton
                    p={8}
                    icon={<CensorBotIcon boxSize={24} color="#ea5454" />}
                    aria-label="censor.bot"
                    {...cursorSizer()}
                  />
                </Link>
                <Link
                  href="https://github.com/galliary"
                  rel="noopener external"
                  target="_blank"
                >
                  <IconButton
                    p={8}
                    icon={<Image boxSize={24} src="/galliary.png" />}
                    aria-label="github.com/galliary"
                    {...cursorSizer()}
                  />
                </Link>
              </HStack>
              <VStack align="start" w="full">
                <Text fontWeight={600} fontSize={14} lineHeight="16.5px">
                  Personally as a designer:
                </Text>
                <HStack spacing={0}>
                  <Link
                    href="https://figma.com/@synqat"
                    rel="noopener external"
                    target="_blank"
                  >
                    <IconButton
                      p={8}
                      icon={<FigmaIcon h={24} />}
                      aria-label="figma.com/@synqat"
                      {...cursorSizer()}
                    />
                  </Link>
                  <Link
                    href="https://censor.bot"
                    rel="noopener external"
                    target="_blank"
                  >
                    <IconButton
                      p={8}
                      icon={<CensorBotIcon boxSize={24} color="#ea5454" />}
                      aria-label="censor.bot"
                      {...cursorSizer()}
                    />
                  </Link>
                  <Link
                    href="https://www.figma.com/community/file/1252822119205158100/Galliary---Designs"
                    rel="noopener external"
                    target="_blank"
                  >
                    <IconButton
                      p={8}
                      icon={<Image boxSize={24} src="/galliary.png" />}
                      aria-label="Galliary Designs"
                      {...cursorSizer()}
                    />
                  </Link>
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </Center>
      </MotionPanel>
    </MotionStack>
  )
}

const AboutMeDisplay: FC<{ previousIndex: number }> = ({ previousIndex }) => {
  const cursorSizer = useCursorToSize()
  const [cutForMobile] = useMediaQuery('(min-width: 514px)', {
    fallback: false,
  })

  return (
    <MotionStack
      w={cutForMobile ? 'panel.main.width' : 'full'}
      maxW="panel.main.width"
      spacing={8}
      align="start"
      transition={transitions.default}
      initial={{
        opacity: 0,
        x: previousIndex > 0 ? TRANSITION_OFFSET : -TRANSITION_OFFSET,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: previousIndex > 0 ? -TRANSITION_OFFSET : TRANSITION_OFFSET,
      }}
    >
      <Text fontWeight={700} fontSize={20} lineHeight="24px" color="accent">
        About
      </Text>
      <MotionPanel w="full">
        <Box py={8} px={10}>
          <Text fontWeight={600} fontSize={14} lineHeight="16.5px">
            A full-stack software engineer with a focus in frontend development,
            and a passion for design. Fueling my creativity through playing
            guitar, listening to music, and prototyping new projects from the
            ground up.
          </Text>
        </Box>
      </MotionPanel>
      <MotionPanel w="full">
        <Center>
          <HStack py={8} px={10} spacing={0}>
            <Link
              href="https://figma.com/@synqat"
              rel="noopener external"
              target="_blank"
            >
              <IconButton
                p={8}
                icon={<FigmaMaterialIcon boxSize={24} />}
                aria-label="figma.com/@synqat"
                {...cursorSizer()}
              />
            </Link>
            <Link
              href="https://twitter.com/synqat_dev"
              rel="noopener external"
              target="_blank"
            >
              <IconButton
                p={8}
                icon={<TwitterIcon boxSize={24} />}
                aria-label="twitter.com/synqat_dev"
                {...cursorSizer()}
              />
            </Link>
            <Link
              href="https://discord.gg/borg"
              rel="noopener external"
              target="_blank"
            >
              <IconButton
                p={8}
                icon={<DiscordIcon boxSize={24} />}
                aria-label="discord.gg/borg"
                {...cursorSizer()}
              />
            </Link>
            <Link
              href="https://github.com/synqat"
              rel="noopener external"
              target="_blank"
            >
              <IconButton
                p={8}
                icon={<GitHubIcon boxSize={24} />}
                aria-label="github.com/synqat"
                {...cursorSizer()}
              />
            </Link>
          </HStack>
        </Center>
      </MotionPanel>
    </MotionStack>
  )
}

function usePrevious<TValue>(value: TValue) {
  const ref = useRef<TValue>(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const AboutMePanel: FC = () => {
  const cursorSizer = useCursorToSize()
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(1)
  const previousDisplayIndex = usePrevious(currentDisplayIndex)
  const [cutForMobile] = useMediaQuery('(min-width: 400px)', {
    fallback: false,
  })

  const displays = [
    <MyDreamStack previousIndex={previousDisplayIndex} />,
    <AboutMeDisplay previousIndex={previousDisplayIndex} />,
    <MyExperience previousIndex={previousDisplayIndex} />,
  ]

  const currentDisplay = useMemo(
    () => displays[currentDisplayIndex],
    [currentDisplayIndex, displays],
  )

  const onPreviousDisplay = () => {
    setCurrentDisplayIndex(
      currentDisplayIndex === 0 ? displays.length - 1 : currentDisplayIndex - 1,
    )
  }

  const onNextDisplay = () => {
    setCurrentDisplayIndex(
      currentDisplayIndex === displays.length - 1 ? 0 : currentDisplayIndex + 1,
    )
  }

  return (
    <HStack>
      {cutForMobile && (
        <IconButton
          aria-label="Go Left"
          p={8}
          rounded="99%"
          color="accent"
          transitionDuration="0.4s"
          transitionTimingFunction="cubic-bezier(0.04, 0.91, 0.6, 0.99)"
          _hover={{
            bg: 'accent',
            color: 'ui',
          }}
          icon={<ChevronIcon boxSize={36} />}
          {...cursorSizer('99%')}
          onClick={onPreviousDisplay}
        />
      )}
      <Box w="full" px={cutForMobile ? 0 : 8}>
        <AnimatePresence mode="sync">{currentDisplay}</AnimatePresence>
      </Box>
      {cutForMobile && (
        <IconButton
          aria-label="Go Right"
          p={8}
          rounded="99%"
          color="ui"
          transitionDuration="0.4s"
          transitionTimingFunction="cubic-bezier(0.04, 0.91, 0.6, 0.99)"
          _hover={{
            bg: 'ui',
            color: 'accent',
          }}
          icon={<ChevronIcon boxSize={36} transform="rotate(180deg)" />}
          {...cursorSizer('99%')}
          onClick={onNextDisplay}
        />
      )}
    </HStack>
  )
}
