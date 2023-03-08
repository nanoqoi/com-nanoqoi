import type { CSSProperties, PropsWithChildren } from 'react'

export interface StackProps extends PropsWithChildren {
  direction: CSSProperties['flexDirection']
  style?: CSSProperties
}

export const Stack = ({ style, direction, children }: StackProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: direction,
      ...style,
    }}
  >
    {children}
  </div>
)
