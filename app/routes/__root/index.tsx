import { FC } from 'react'
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const IndexPage: FC = () => {
  const [t] = useTranslation('landing')

  return (
    <Center boxSize="full">
      <VStack w="full" gap={0}>
        <Heading
          w="full"
          fontSize="6vw"
          fontWeight={400}
          lineHeight="125.74%"
          letterSpacing="5.12px"
          textTransform="uppercase"
        >
          <Text as="span">{t('hero')}</Text>
        </Heading>
        <Heading
          w="full"
          fontSize="6vw"
          fontWeight={400}
          lineHeight="125.74%"
          letterSpacing="5.12px"
          textTransform="uppercase"
          textAlign="end"
        >
          <Text as="span" color="secondary">
            Websites{' '}
          </Text>
          <Text as="span" color="alt">
            With
          </Text>
        </Heading>
        <HStack gap={8} w="full" align="stretch">
          <Flex w="full" h="auto" py={3}>
            <Flex
              boxSize="full"
              bg="faded"
              flexGrow={0}
              rounded="2xl"
              p={6}
              pt={4}
            >
              <Text>
                A FULL-STACK SOFTWARE ENGINEER WITH A PASSION FOR PERFECTING THE
                DETAILS OF HIS CRAFT. ACTIVELY PURSUING WEBSITE DESIGN AS A
                CREATIVE OUTLET AND MATERIALIZING CONCEPTS.
              </Text>
            </Flex>
          </Flex>
          <Heading
            flexShrink={0}
            fontSize="6vw"
            fontWeight={400}
            lineHeight="125.74%"
            letterSpacing="5.12px"
            textTransform="uppercase"
            textAlign="end"
          >
            <Text as="span" color="primary">
              Precision
            </Text>
            <br />
            <Text as="span" color="alt">
              And{' '}
            </Text>
            <Text as="span" color="primary">
              Detail
            </Text>
          </Heading>
        </HStack>
      </VStack>
    </Center>
  )
}

export default IndexPage
