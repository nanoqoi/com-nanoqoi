import { ThreeElements } from '@react-three/fiber'
import { FC, useEffect, useMemo, useRef } from 'react'
import { useLimitedFrame } from 'src/utils/fps-limit'
import { theme } from 'src/constants'
import { MeshLineGeometry, raycast } from 'meshline'
import { Group, IcosahedronGeometry } from 'three'

export const Icosahedron: FC<ThreeElements['mesh']> = (props) => {
  const ref = useRef<Group>(null)

  const meshLineGeometry = useMemo(() => new MeshLineGeometry(), [])
  const geometry = useMemo(() => new IcosahedronGeometry(2), [])

  useEffect(() => {
    meshLineGeometry.setPoints(geometry)
  }, [])

  useLimitedFrame(theme.fps, () => {
    if (!ref.current) return

    ref.current.rotation.y -= 20
  })

  return (
    <group ref={ref} rotation-y={Math.PI / 2} position-y={0.5}>
      <mesh {...props} scale={0.5} rotation={[0, 0, 0.564]} geometry={geometry}>
        <meshBasicMaterial color={theme.colors.background} />
      </mesh>
      <mesh
        {...props}
        scale={0.5}
        raycast={raycast}
        rotation={[0, 0, 0.564]}
        geometry={meshLineGeometry}
      >
        <meshLineMaterial
          sizeAttenuation={true}
          lineWidth={0.1}
          color="white"
        />
      </mesh>
    </group>
  )
}
