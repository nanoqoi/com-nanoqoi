import { CSSProperties, PropsWithChildren } from 'react'

export interface TextProps extends PropsWithChildren {
  style?: CSSProperties
}

export const Text = ({ children, style }: TextProps) => (
  <span style={style}>{children}</span>
)