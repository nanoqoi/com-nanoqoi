import { useCallback, useMemo } from 'react'
import { Particles as TSParticles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine'

type GetParticleLayerProps = {
  opacity: number
  size: [number, number]
  blur: number
  speed: number
}

const getParticleLayer = ({
  opacity,
  size,
  blur,
  speed,
}: GetParticleLayerProps) =>
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
          mode: 'attract',
        },
        onClick: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        attract: {
          distance: 400,
          duration: 0.4,
          speed: 1,
        },
        repulse: {
          distance: 800,
          duration: 3,
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
        enable: true,
        speed: {
          min: 0.01,
          max: speed,
        },
        attract: {
          enable: true,
          rotate: {
            x: 360,
            y: 360,
          },
        },
        collisions: true,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 2000,
        },
        value: 60,
      },
      shape: {
        type: 'circle',
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

  const arrayLength = 4
  const getInvertedValue = (index: number) => arrayLength - index

  const particleLayers = useMemo(
    () =>
      [...new Array(arrayLength).fill(0)].map((_, index) => (
        <TSParticles
          key={index}
          id={`ts-particles-${index}`}
          init={particlesInit}
          options={getParticleLayer({
            opacity: index * 0.5,
            speed: index * 0.15,
            size: [getInvertedValue(index) * 1.5, getInvertedValue(index) * 2],
            blur: (getInvertedValue(index) - 0.15) * 3.5,
          })}
        />
      )),
    [particlesInit],
  )

  return <>{particleLayers}</>
}
