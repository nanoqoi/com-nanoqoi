import { useTranslation } from 'react-i18next'
import { Tooltip } from 'app/client/components/Tooltip'
import { forwardRef } from 'react'
import { Link, LinkProps } from 'app/client/components/Link'

export const HomeNavLink = forwardRef<
  HTMLAnchorElement,
  Omit<LinkProps, 'to' | 'asChild'>
>((props, ref) => {
  const [nav] = useTranslation('navigation')

  return (
    <Tooltip content={nav('home.label')}>
      <Link ref={ref} to={nav('home.path')} {...props} />
    </Tooltip>
  )
})
