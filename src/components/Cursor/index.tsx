import { MotionBox, transitions } from 'src/components/Motion'
import type { MouseEventHandler, MouseEvent as ReactMouseEvent } from 'react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import type { ChakraProps } from '@chakra-ui/react'

const OUTLINE_SIZE = 2
const CENTER_SIZE = OUTLINE_SIZE * 2
const ORIGINAL_SIZE = CENTER_SIZE * 4

export type CursorContextType = {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
  isOverriding: boolean
  setIsOverriding: (isOverriding: boolean) => void
  size: {
    width: number
    height: number
    set: (size: { width: number; height: number }) => void
  }
  anchor: {
    x: number
    y: number
    set: (anchor: { x: number; y: number }) => void
  }
  pos: {
    x: number
    y: number
    set: (pos: { x: number; y: number }) => void
  }
  radius: {
    value: string | number | undefined
    set: (radius: { value: string | number | undefined }) => void
  }
}

const defaults = {
  size: { width: ORIGINAL_SIZE, height: ORIGINAL_SIZE },
  pos: { x: 0, y: 0 },
  anchor: { x: 0, y: 0 },
  radius: { value: undefined },
  isVisible: true,
}

export const CursorContext = createContext<CursorContextType>({
  isOverriding: false,
  setIsOverriding: () => {},
  size: { ...defaults.size, set: () => {} },
  radius: { ...defaults.radius, set: () => {} },
  pos: {
    ...defaults.pos,
    set: () => {},
  },
  anchor: {
    ...defaults.anchor,
    set: () => {},
  },
  isVisible: defaults.isVisible,
  setIsVisible: () => {},
})

export const useCursor = () => useContext(CursorContext)

export function useCursorToSize<TProps extends ChakraProps>() {
  const ref = useRef<ReturnType<typeof setTimeout>>()
  const { radius, setIsOverriding, anchor, size } = useCursor()

  const onMouseEnter = (useRadius: number | string = 0, e: ReactMouseEvent) => {
    const {
      width = 0,
      height = 0,
      x,
      y,
    } = e.currentTarget.getBoundingClientRect()

    setIsOverriding(true)

    size.set({
      width,
      height,
    })

    radius.set({ value: useRadius })

    clearTimeout(ref.current)
    ref.current = setTimeout(() => {
      anchor.set({
        x: x + width / 2,
        y: y + height / 2,
      })
    }, 50)
  }

  const onMouseLeave: MouseEventHandler = (e) => {
    size.set(defaults.size)
    setIsOverriding(false)
  }

  return (useRadius?: number | string) =>
    ({
      onMouseEnter: (e: ReactMouseEvent) => onMouseEnter(useRadius, e),
      onMouseLeave,
    } as const)
}

export const Cursor: FC = () => {
  const [isClicking, setIsClicking] = useState(false)
  const { radius, size, anchor, isOverriding, pos, isVisible, setIsVisible } =
    useCursor()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.set({ x: e.clientX, y: e.clientY })
      if (!isOverriding) {
        anchor.set({ x: e.clientX, y: e.clientY })
      }
    }

    const onPointerDown = () => setIsClicking(true)
    const onPointerUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointerup', onPointerUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [isOverriding])

  useEffect(() => {
    const onMouseLeaveWindow = () => setIsVisible(false)
    const onMouseEnterWindow = () => setIsVisible(true)

    document.addEventListener('mouseleave', onMouseLeaveWindow)
    document.addEventListener('mouseenter', onMouseEnterWindow)

    return () => {
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
      document.removeEventListener('mouseenter', onMouseEnterWindow)
    }
  }, [])

  const overrideRadius = radius.value || '4px'
  const borderRadiusOverriding = isOverriding ? overrideRadius : '0%'

  const posX = isOverriding
    ? anchor.x - size.width / 2 - OUTLINE_SIZE
    : pos.x - size.width / 2 - OUTLINE_SIZE
  const posY = isOverriding
    ? anchor.y - size.height / 2 - OUTLINE_SIZE
    : pos.y - size.height / 2 - OUTLINE_SIZE

  return (
    <MotionBox
      id="cursor"
      pos="fixed"
      pointerEvents="none"
      zIndex={9999}
      userSelect="none"
      top={0}
      left={0}
      border={`${OUTLINE_SIZE}px solid #fd41a2`}
      transition={isOverriding ? transitions.medium : transitions.instant}
      shadow="0 0 8px 0 rgba(0, 0, 0, 0.25)"
      animate={{
        x: posX,
        y: posY,
        scale: isClicking ? 1.25 : 1,
        width: size.width + OUTLINE_SIZE * 2,
        height: size.height + OUTLINE_SIZE * 2,
        opacity: Number(isVisible),
        borderRadius: isVisible ? borderRadiusOverriding : '99%',
      }}
    >
      <Box boxSize="full" pos="relative">
        <MotionBox
          pos="absolute"
          bg="#fd41a2"
          boxSize={CENTER_SIZE}
          transition={transitions.faster}
          animate={
            isOverriding
              ? {
                  borderRadius: '50%',
                  x: pos.x - anchor.x + size.width / 2 - OUTLINE_SIZE,
                  y: pos.y - anchor.y + size.height / 2 - OUTLINE_SIZE,
                }
              : {
                  borderRadius: '0%',
                  x: size.width / 2 - OUTLINE_SIZE,
                  y: size.height / 2 - OUTLINE_SIZE,
                }
          }
        />
      </Box>
    </MotionBox>
  )
}

export const CursorProvider: FCWithChildren = ({ children }) => {
  const [size, setSize] = useState(defaults.size)
  const [pos, setPos] = useState(defaults.pos)
  const [anchor, setAnchor] = useState(defaults.anchor)
  const [radius, setRadius] = useState<{ value: number | string | undefined }>(
    defaults.radius,
  )
  const [isOverriding, setIsOverriding] = useState(false)
  const [isVisible, setIsVisible] = useState(defaults.isVisible)

  return (
    <CursorContext.Provider
      value={{
        isOverriding,
        setIsOverriding,
        size: { ...size, set: setSize },
        pos: { ...pos, set: setPos },
        anchor: { ...anchor, set: setAnchor },
        radius: { ...radius, set: setRadius },
        isVisible,
        setIsVisible,
      }}
    >
      <Cursor />
      <>{children}</>
    </CursorContext.Provider>
  )
}
