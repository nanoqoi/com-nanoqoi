import { useCallback } from 'react'
import { Particles as TSParticles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export const Particles: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  return (
    <TSParticles
      id="tsparticles"
      init={particlesInit}
      options={{
        style: {
          position: 'absolute',
          width: '100%',
          height: '100%',
        },
        smooth: true,
        pauseOnBlur: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 160,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: '#ecbcff',
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          shape: {
            type: 'square',
          },
          size: {
            value: 9.5,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
