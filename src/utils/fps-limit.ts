import { RootState, useFrame } from '@react-three/fiber'
import { useMemo } from 'react'
import { Clock } from 'three'

export const useLimitedFrame = (
  fps: number = 0,
  onFrame = (_state: RootState, _delta: number) => {},
) => {
  const clock = useMemo(() => new Clock(), [fps])

  useFrame((state) => {
    // If fps is 0, then we don't want to limit the frame rate
    if (fps === 0) {
      onFrame(state, clock.getDelta())
      return
    }

    // If the frame rate is limited, then we only want to call onFrame
    // when the clock has elapsed enough time to reach the desired fps
    if (clock.getElapsedTime() >= 1 / fps) {
      onFrame(state, clock.getDelta())
      clock.start()
    }
  })

  return null
}
