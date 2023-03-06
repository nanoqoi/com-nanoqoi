import useSound from 'use-sound'
import { MusicIcon } from 'src/components/icon/MusicIcon'

export const GloomPlayer = () => {
  const [play, state] = useSound('/music/gloom.mp3', {
    loop: true,
    volume: 0.3,
  })

  return (
    <group onClick={() => (state.sound?.playing() ? state.stop() : play())}>
      <MusicIcon state={state} />
    </group>
  )
}
