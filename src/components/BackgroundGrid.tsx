import { FC, useMemo } from 'react'
import { ThreeElements } from '@react-three/fiber'
import { Line } from 'src/components/Line'
import { theme } from 'src/constants'

export const BackgroundGrid: FC<
  ThreeElements['group'] & { lineWidth: number }
> = (props) => {
  const verticalLines = useMemo(
    () =>
      new Array(theme.grid.size)
        .fill(0)
        .map((_, i) => (
          <Line
            key={i}
            width={props.lineWidth}
            start={[i - theme.grid.size / 2, 0, theme.grid.size / 2]}
            end={[i - theme.grid.size / 2, 0, -theme.grid.size / 2]}
          />
        )),
    [],
  )

  const horizontalLines = useMemo(
    () =>
      new Array(theme.grid.size)
        .fill(0)
        .map((_, i) => (
          <Line
            width={props.lineWidth}
            key={i}
            start={[-theme.grid.size / 2, 0, i - theme.grid.size / 2]}
            end={[theme.grid.size / 2, 0, i - theme.grid.size / 2]}
          />
        )),
    [],
  )

  return (
    <group {...props} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
      {verticalLines}
      {horizontalLines}
      <Line
        width={props.lineWidth}
        start={[theme.grid.size / 2, 0, theme.grid.size / 2]}
        end={[theme.grid.size / 2, 0, -theme.grid.size / 2]}
      />
      <Line
        width={props.lineWidth}
        start={[theme.grid.size / 2, 0, theme.grid.size / 2]}
        end={[-theme.grid.size / 2, 0, theme.grid.size / 2]}
      />
    </group>
  )
}
