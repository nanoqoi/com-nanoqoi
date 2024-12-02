declare module '*.mdx' {
  import { FC, PropsWithChildren } from 'react'
  const MDXComponent: (props) => JSX.Element
  export default MDXComponent

  export interface MDXCustomMetadata {
    slug: string
    title: string
    blurb: string
    bannerSrc: string
  }

  export const metadata: MDXCustomMetadata

  declare global {
    const Blurb: FC<PropsWithChildren> = (props) => JSX.Element
    const Banner: FC<{ src: string }> = (props) => JSX.Element
    const metadata: MDXCustomMetadata
  }
}
