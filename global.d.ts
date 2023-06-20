import type { FC as ReactFC, PropsWithChildren } from 'react'

declare global {
  export type FC<P = {}> = ReactFC<P>
  export type FCWithChildren<P = {}> = FC<PropsWithChildren<P>>
}
