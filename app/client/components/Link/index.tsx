import { forwardRef } from 'react'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import { Link as RemixLink, useParams } from '@remix-run/react'

export type LinkProps = Omit<ChakraLinkProps, 'to' | 'href' | 'asChild'> & {
  to: string
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, to, rel, ...rest }, ref) => {
    const params = useParams()
    const locale = params.lang ? `/${params.lang}` : ''

    return (
      <ChakraLink asChild ref={ref} color="inherit" {...rest}>
        <RemixLink to={locale + to} rel={rel}>
          {children}
        </RemixLink>
      </ChakraLink>
    )
  },
)
