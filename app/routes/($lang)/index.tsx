import { FC } from 'react'
import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Trans, useTranslation } from 'react-i18next'
import { Link } from 'app/client/components/Link'

const components = {
  primary: <Text as="span" color="primary" />,
  secondary: <Text as="span" color="secondary" />,
  alt: <Text as="span" color="alt" />,
}

const IndexPage: FC = () => {
  const [t] = useTranslation('landing')
  const [nav] = useTranslation('navigation')
  const [generic] = useTranslation('generic')

  return (
    <Center boxSize="full">
      <VStack w="full" gap={0}>
        <Heading w="full" textStyle="hero.title">
          <Trans t={t} i18nKey="hero.line_1" />
          <br />
          <Trans t={t} i18nKey="hero.line_2" />
        </Heading>
        <Heading w="full" textAlign="end" textStyle="hero.title">
          <Trans t={t} i18nKey="hero.line_3" components={components} />
        </Heading>
        <HStack gap={12} w="full" align="stretch">
          <Flex w="full" h="auto" py={3} maxW="1/2">
            <VStack
              p={6}
              pt={5}
              bg="faded"
              flexGrow={0}
              align="start"
              rounded="2xl"
              boxSize="full"
              justify="space-between"
            >
              <Text textStyle="hero.blurb" color="whiteAlpha.700">
                {t('blurb')}
              </Text>
              <Button
                fontFamily="heading"
                textTransform="uppercase"
                fontSize="xl"
                px={6}
                rounded="2xl"
              >
                <Link to={nav('about.path')}>{generic('read-more')}</Link>
              </Button>
            </VStack>
          </Flex>
          <Heading flexShrink={0} textStyle="hero.title" textAlign="end">
            <Trans t={t} i18nKey="hero.line_4" components={components} />
            <br />
            <Trans t={t} i18nKey="hero.line_5" components={components} />
          </Heading>
        </HStack>
      </VStack>
    </Center>
  )
}

export default IndexPage
