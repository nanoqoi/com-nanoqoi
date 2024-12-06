import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CustomTypeOptions } from 'i18next'
import { Link } from 'app/client/components/Link'

type NavigationKeys = keyof CustomTypeOptions['resources']['navigation']

export interface NavLinkProps {
  id: Exclude<NavigationKeys, 'splitter'>
}

export const NavLink: FC<NavLinkProps> = ({ id }) => {
  const [nav] = useTranslation('navigation')

  return (
    <Link
      to={nav(`${id}.path` as const)}
      _hover={{
        color: 'primary',
      }}
    >
      {nav(`${id}.label` as const)}
    </Link>
  )
}
