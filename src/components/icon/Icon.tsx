import { forwardRef, useState } from 'react'
import { Mesh, TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
import useSound from 'use-sound'
import { useLimitedFrame } from 'src/utils/fps-limit'
import { theme } from 'src/constants'
import { CustomCursor, useCursor } from 'src/context/cursor.context'

export const Icon = forwardRef<
  Mesh,
  {
    icon: string
    onFrame?(): void
  }
>(({ icon, onFrame }, ref) => {
  const { setCursor } = useCursor()
  const colors = useLoader(TextureLoader, `/icons/${icon}.png`)
  const [isHovering, setIsHovering] = useState(false)
  const [play] = useSound('/sounds/click.wav', {
    volume: 0.2,
  })

  useLimitedFrame(theme.fps / 2, onFrame)

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      onPointerEnter={() => {
        play()
        setCursor(CustomCursor.POINTER)
        setIsHovering(true)
      }}
      onPointerLeave={() => {
        setCursor(CustomCursor.DEFAULT)
        setIsHovering(false)
      }}
    >
      <planeGeometry attach="geometry" args={[0.5, 0.5]} />
      <meshBasicMaterial
        attach="material"
        map={colors}
        transparent={true}
        color={isHovering ? theme.colors.accent : theme.colors.foreground}
      />
    </mesh>
  )
})
