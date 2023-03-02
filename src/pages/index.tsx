import Head from 'next/head'
import * as THREE from 'three'
import { CatmullRomCurve3, TextureLoader } from 'three'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import {
  Canvas,
  extend,
  ThreeElements,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Pixelation,
  Scanline,
} from '@react-three/postprocessing'
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline'
import { useLimitedFrame } from 'src/utils/fps-limit'
import { FontLoader, TextGeometry, TextGeometryParameters } from 'three-stdlib'
import { getDefault } from 'src/utils/getDefault'
import { Font } from 'three-stdlib/loaders/FontLoader'
import useSound from 'use-sound'
import { ReturnedValue } from 'use-sound/dist/types'

const BACKGROUND_COLOR = '#383147'
const FOREGROUND_COLOR = '#ffffff'
const FOREGROUND_ACCENT_COLOR = '#a771bf'

const GLOBAL_FPS = 14

const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b

extend({ TextGeometry, MeshLineGeometry, MeshLineMaterial })

const fontBlob = await getDefault(
  import('src/assets/new-rodin-m.json') as Promise<{ default: Font['data'] }>,
)
const fontLoader = new FontLoader()

const MusicIcon: FC<{ state: ReturnedValue[1] }> = ({ state }) => {
  const ref = useRef<THREE.Mesh>(null)
  const colors = useLoader(TextureLoader, '/icons/note.png')
  const [isHovering, setIsHovering] = useState(false)

  useLimitedFrame(GLOBAL_FPS / 2, () => {
    if (!ref.current || !state.sound) return

    if (state.sound.playing()) {
      ref.current.rotation.z = Math.sin(Date.now() / 100) / 5
    } else {
      ref.current.rotation.z = 0
    }
  })

  return (
    <mesh
      ref={ref}
      position={[0, 0, 0]}
      onPointerEnter={() => {
        document.body.style.cursor = 'pointer'
        setIsHovering(true)
      }}
      onPointerLeave={() => {
        document.body.style.cursor = 'default'
        setIsHovering(false)
      }}
    >
      <planeGeometry attach="geometry" args={[0.5, 0.5]} />
      <meshBasicMaterial
        attach="material"
        map={colors}
        transparent={true}
        color={isHovering ? FOREGROUND_ACCENT_COLOR : FOREGROUND_COLOR}
      />
    </mesh>
  )
}

const Text: FC<{ text: string; size: number }> = ({ text, size = 1 }) => {
  const font = useMemo(() => fontLoader.parse(fontBlob), [])

  const textOptions: TextGeometryParameters = {
    font,
    size: 0.3 * size,
    height: 0.02 * size,
    letterSpacing: 0.4 * size,
  }

  return (
    <mesh>
      <textGeometry attach="geometry" args={[text, textOptions]} />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  )
}

const SpecialShape: FC<ThreeElements['mesh']> = (props) => {
  const ref = useRef<THREE.Group>(null)

  const meshLineGeometry = new MeshLineGeometry()
  const geometry = new THREE.IcosahedronGeometry(2)

  useEffect(() => {
    meshLineGeometry.setPoints(geometry)
  }, [])

  useLimitedFrame(GLOBAL_FPS, () => {
    if (!ref.current) return

    ref.current.rotation.y -= 20
  })

  return (
    <group ref={ref} rotation-y={Math.PI / 2} position-y={0.5}>
      <mesh {...props} scale={1.5} rotation={[0, 0, 0.564]} geometry={geometry}>
        <meshStandardMaterial
          color={BACKGROUND_COLOR}
          emissive={BACKGROUND_COLOR}
        />
      </mesh>
      <mesh
        {...props}
        raycast={raycast}
        scale={1.5}
        rotation={[0, 0, 0.564]}
        geometry={meshLineGeometry}
      >
        <meshLineMaterial lineWidth={0.2} color="white" />
      </mesh>
    </group>
  )
}

const GRID_SIZE = 9

const Line: FC<{ start: number[]; end: number[]; width: number }> = ({
  start,
  end,
  width,
}) => {
  const points = [start, end].map((v) => new THREE.Vector3(...v))

  return (
    <line>
      <tubeGeometry args={[new CatmullRomCurve3(points), 4, 0.02, 4, false]} />
      <lineBasicMaterial color={FOREGROUND_COLOR} linewidth={width} />
    </line>
  )
}

const SpecialGrid: FC<ThreeElements['group'] & { lineWidth: number }> = (
  props,
) => {
  const verticalLines = new Array(GRID_SIZE)
    .fill(0)
    .map((_, i) => (
      <Line
        key={i}
        width={props.lineWidth}
        start={[i - GRID_SIZE / 2, 0, GRID_SIZE / 2]}
        end={[i - GRID_SIZE / 2, 0, -GRID_SIZE / 2]}
      />
    ))

  const horizontalLines = new Array(GRID_SIZE)
    .fill(0)
    .map((_, i) => (
      <Line
        width={props.lineWidth}
        key={i}
        start={[-GRID_SIZE / 2, 0, i - GRID_SIZE / 2]}
        end={[GRID_SIZE / 2, 0, i - GRID_SIZE / 2]}
      />
    ))

  return (
    <group {...props} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
      {verticalLines}
      {horizontalLines}
      <Line
        width={props.lineWidth}
        start={[GRID_SIZE / 2, 0, GRID_SIZE / 2]}
        end={[GRID_SIZE / 2, 0, -GRID_SIZE / 2]}
      />
      <Line
        width={props.lineWidth}
        start={[GRID_SIZE / 2, 0, GRID_SIZE / 2]}
        end={[-GRID_SIZE / 2, 0, GRID_SIZE / 2]}
      />
    </group>
  )
}

const EffectsHandler = () => {
  const [bloomOpacity, setBloomOpacity] = useState(0.4)

  useLimitedFrame(12, () => {
    setBloomOpacity(Math.floor(Math.random() * 2) ? 0.4 : 0.8)
  })

  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={bloomOpacity === 0.4 ? 0.5 : 4}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom
        radius={8}
        opacity={bloomOpacity}
        intensity={1}
        kernelSize={2}
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        height={300}
      />
      <Noise opacity={0.2} />
      <Pixelation granularity={2} />
      <Scanline density={4} opacity={0.2} />
    </EffectComposer>
  )
}

const MusicPlayer = () => {
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

const CameraHandler = () => {
  const { camera } = useThree()
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })

  useFrame(() => {
    camera.position.x = lerp(
      camera.position.x,
      -(mousePos.x - window.innerWidth / 2) / 4000,
      0.1,
    )
    camera.position.y = lerp(
      camera.position.y,
      (mousePos.y - window.innerHeight / 2) / 4000,
      0.1,
    )
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [camera])

  return null
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Synqat シンカット</title>
        <meta name="description" content="Synqat シンカット" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`
            @font-face {
              font-family: 'New Rodin M';
              src: url('/fonts/new-rodin/FOTNewRodin Pro M.otf') format('otf');
            }
            body {
              background: ${BACKGROUND_COLOR};
            }
          `}
        </style>
      </Head>

      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ambientLight intensity={1} />

        <EffectsHandler />

        <CameraHandler />

        <group>
          <group position={[0, 0, -4]}>
            <SpecialShape position={[0, 0, 0]} />
            <SpecialGrid position={[0, 0, -0.5]} lineWidth={4} />
          </group>

          <group position={[-2.8, -2.95, -0.5]}>
            <Text text="シンカット" size={1} />
          </group>

          <group position={[-2.6, 3.4, -0.5]}>
            <MusicPlayer />
            <group position={[0.4, -0.06, 0]}>
              <Text text="gloom.mp3" size={0.6} />
            </group>
          </group>
        </group>
      </Canvas>
    </>
  )
}
