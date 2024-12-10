import { FC } from 'react'
import { HStack, Text } from '@chakra-ui/react'
import { Trans, useTranslation } from 'react-i18next'
import { NavLink } from 'app/client/components/NavLink'
import { HomeNavLink } from 'app/client/components/NavLink/HomeNavLink'
import { HeaderIconLinks } from 'app/client/components/Header/HeaderIconLinks'

export const Header: FC = () => {
  const [t] = useTranslation('header')
  const [nav] = useTranslation('navigation')

  return (
    <HStack as="header" w="full" flexShrink={0} justify="space-between">
      <HStack
        textStyle="header.heading"
        display={{
          base: 'none',
          '2xl': 'flex',
        }}
      >
        <Trans
          t={t}
          i18nKey="title.2xl"
          components={{
            home: <HomeNavLink />,
            plain: <Text as="span" />,
            primary: <Text as="span" color="primary" />,
            secondary: <Text as="span" color="secondary" />,
          }}
        />
      </HStack>
      <HStack
        textStyle="header.heading"
        display={{
          base: 'flex',
          '2xl': 'none',
        }}
      >
        <Trans
          t={t}
          i18nKey="title.base"
          components={{
            home: <HomeNavLink />,
            primary: <Text as="span" color="primary" />,
          }}
        />
      </HStack>
      <HStack
        gap={4}
        textStyle="header.navigation"
        separator={
          <Text as="span" color="secondary" border="none">
            {nav('splitter')}
          </Text>
        }
      >
        <NavLink id="about" />
        <NavLink id="blog" />
        {/*<NavLink id="skills" />*/}
        {/*<NavLink id="projects" />*/}
        <HeaderIconLinks />
      </HStack>
    </HStack>
  )
}
