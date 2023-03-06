import { FC, useRef } from 'react'
import { Icon } from 'src/components/icon/Icon'
import { ReturnedValue } from 'use-sound/dist/types'
import { Mesh } from 'three'

export const MusicIcon: FC<{ state: ReturnedValue[1] }> = ({ state }) => {
  const ref = useRef<Mesh>(null)

  const onFrame = () => {
    if (!ref.current || !state.sound) return

    if (state.sound.playing()) {
      ref.current.rotation.z = Math.sin(Date.now() / 100) / 5
    } else {
      ref.current.rotation.z = 0
    }
  }

  return <Icon ref={ref} icon="note" onFrame={onFrame} />
}
