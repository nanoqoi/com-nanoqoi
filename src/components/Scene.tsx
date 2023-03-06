import { Canvas, extend } from '@react-three/fiber'
import { TextGeometry } from 'three-stdlib'
import {
  MeshLine,
  MeshLineGeometry,
  MeshLineMaterial,
} from '@lume/three-meshline'
import { HookCaller } from 'src/utils/HookCaller'
import { useCustomCameraHandler } from 'src/hooks/useCustomCameraHandler'
import { EffectsHandler } from 'src/components/EffectsHandler'
import { Icosahedron } from 'src/components/Icosahedron'
import { BackgroundGrid } from 'src/components/BackgroundGrid'
import { Text } from 'src/components/Text'
import { GloomPlayer } from 'src/components/GloomPlayer'
import { GithubIcon } from 'src/components/icon/GithubIcon'
import { theme } from 'src/constants'

extend({ MeshLine, TextGeometry, MeshLineGeometry, MeshLineMaterial })

export const Scene = () => (
  <Canvas
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
  >
    <EffectsHandler />

    <HookCaller hook={useCustomCameraHandler} />

    <group>
      <group position={[0, 0, -4]}>
        <group position={[0, -0.35, 6]}>
          <Icosahedron position={[0, 0, 0]} />
        </group>
        <BackgroundGrid position={[0, 0, 0]} lineWidth={4} />
      </group>

      <group position={[-2.8, -2.95, -0.5]}>
        <Text text="シンカット" size={1} />
      </group>

      <group position={[0.8, -2.95, -0.5]}>
        <Text text="Synqat" size={1} />
      </group>

      <group position={[-2.5, 3.4, -0.5]}>
        <GloomPlayer />
        <group position={[5, 0, 0]}>
          <GithubIcon />
        </group>
        <group position={[0.4, -0.06, 0]}>
          <Text text="gloom.mp3" size={0.6} />
        </group>
      </group>
    </group>

    <mesh position={[0, 0, -10]} rotation={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color={theme.colors.background} />
    </mesh>
  </Canvas>
)
