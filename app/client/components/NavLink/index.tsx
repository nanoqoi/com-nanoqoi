import { FC } from 'react'
import { Link as RemixLink } from '@remix-run/react'
import { useTranslation } from 'react-i18next'
import { CustomTypeOptions } from 'i18next'
import { Link } from '@chakra-ui/react'

type NavigationKeys = keyof CustomTypeOptions['resources']['navigation']

export interface NavLinkProps {
  id: Exclude<NavigationKeys, 'splitter'>
}

export const NavLink: FC<NavLinkProps> = ({ id }) => {
  const [nav] = useTranslation('navigation')

  return (
    <Link
      asChild
      _hover={{
        color: 'primary',
      }}
    >
      <RemixLink to={nav(`${id}.path` as const)}>
        {nav(`${id}.label` as const)}
      </RemixLink>
    </Link>
  )
}
