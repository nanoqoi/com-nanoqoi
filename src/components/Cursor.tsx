import { useCursor } from 'src/context/cursor.context'
import { useEffect, useRef } from 'react'

export const Cursor = () => {
  const ref = useRef<HTMLImageElement>(null)
  const { cursor } = useCursor()

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      ref.current.style.left = `${e.clientX}px`
      ref.current.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  useEffect(() => {
    if (!ref.current) return
    ref.current.src = `/icons/cursor-${cursor}.png`
  }, [cursor])

  return (
    <img
      alt="cursor"
      ref={ref}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 1000,
        transform: `scale(3)`,
        imageRendering: 'pixelated',
      }}
      src={`/icons/cursor-${cursor}.png`}
    />
  )
}
