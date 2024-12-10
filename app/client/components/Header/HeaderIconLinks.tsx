import { FC } from 'react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'app/client/components/Link'
import {
  DiscordIcon,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  FigmaIcon,
  EmailIcon,
} from '@storybook/icons'
import { HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export const HeaderIconLinks: FC = () => {
  const [nav] = useTranslation('navigation')

  return (
    <HStack gap={4}>
      <Link
        to="https://github.com/nanoqoi"
        rel="noopener noreferrer"
        target="_blank"
        _hover={{
          color: 'primary',
        }}
        aria-label={nav('aria-labels.github')}
      >
        <GithubIcon fill="currentColor" color="inherit" size={24} />
      </Link>
      <Link
        to="https://discord.com/users/286166184402092042"
        rel="noopener noreferrer"
        target="_blank"
        _hover={{
          color: 'primary',
        }}
        aria-label={nav('aria-labels.discord')}
      >
        <DiscordIcon fill="currentColor" color="inherit" size={24} />
      </Link>
      <Link
        to="https://twitter.com/nanoqoi"
        rel="noopener noreferrer"
        target="_blank"
        _hover={{
          color: 'primary',
        }}
        aria-label={nav('aria-labels.twitter')}
      >
        <TwitterIcon fill="currentColor" color="inherit" size={24} />
      </Link>
      <Link
        to="https://linkedin.com/in/kendev"
        rel="noopener noreferrer"
        target="_blank"
        _hover={{
          color: 'primary',
        }}
        aria-label={nav('aria-labels.linkedin')}
      >
        <LinkedinIcon fill="currentColor" color="inherit" size={24} />
      </Link>
      <Link
        to="https://figma.com/@nanoqoi"
        rel="noopener noreferrer"
        target="_blank"
        _hover={{
          color: 'primary',
        }}
        aria-label={nav('aria-labels.figma')}
      >
        <FigmaIcon fill="currentColor" color="inherit" size={24} />
      </Link>
      <ChakraLink
        href="mailto:contact@nanoqoi.com"
        rel="noopener noreferrer"
        _hover={{
          color: 'primary',
        }}
        aria-label={nav('aria-labels.email')}
      >
        <EmailIcon fill="currentColor" color="inherit" size={24} />
      </ChakraLink>
    </HStack>
  )
}
