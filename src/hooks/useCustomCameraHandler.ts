import { useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { useLimitedFrame } from 'src/utils/fps-limit'
import { theme } from 'src/constants'

export const useCustomCameraHandler = () => {
  const { camera } = useThree()
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })

  useLimitedFrame(theme.fps, () => {
    camera.position.x = -(mousePos.x - window.innerWidth / 2) / 4000
    camera.position.y = (mousePos.y - window.innerHeight / 2) / 4000
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
}
