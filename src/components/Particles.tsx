import { useCallback, useMemo } from 'react'
import { Particles as TSParticles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine'

type GetParticleLayerProps = {
  opacity: number
  size: [number, number]
  blur: number
}

const getParticleLayer = ({ opacity, size, blur }: GetParticleLayerProps) =>
  ({
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      filter: `blur(${blur}px)`,
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
          distance: 120,
          duration: 2,
        },
      },
    },
    particles: {
      color: {
        value: '#ecbcff',
      },
      opacity: {
        value: opacity,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: false,
        speed: {
          min: 0.5,
          max: 1,
        },
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
        value: {
          min: size[0],
          max: size[1],
        },
      },
    },
    detectRetina: true,
  } satisfies RecursivePartial<IOptions>)

export const Particles: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particleLayers = useMemo(
    () =>
      [...new Array(4).fill(0)].map((_, index) => (
        <TSParticles
          id={`ts-particles-${index}`}
          init={particlesInit}
          options={getParticleLayer({
            opacity: index * 0.5,
            size: [index * 2, index * 2 + 6],
            blur: index * 8,
          })}
        />
      )),
    [particlesInit],
  )

  return <>{particleLayers}</>
}
