import { FC, useMemo } from 'react'
import * as THREE from 'three'
import { CatmullRomCurve3 } from 'three'
import { theme } from 'src/constants'

export const Line: FC<{ start: number[]; end: number[]; width: number }> = ({
  start,
  end,
  width,
}) => {
  const points = useMemo(
    () => [start, end].map((v) => new THREE.Vector3(...v)),
    [],
  )

  return (
    <mesh>
      <tubeGeometry args={[new CatmullRomCurve3(points), 4, 0.02, 4, false]} />
      <meshBasicMaterial color={theme.colors.foreground} linewidth={width} />
    </mesh>
  )
}
