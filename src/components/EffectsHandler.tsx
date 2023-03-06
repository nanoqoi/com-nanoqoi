import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Pixelation,
  Scanline,
} from '@react-three/postprocessing'

export const EffectsHandler = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.5}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom
        radius={8}
        opacity={0.4}
        intensity={1}
        kernelSize={2}
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        height={300}
      />
      <Noise opacity={0.05} />
      <Pixelation granularity={4} />
      <Scanline density={4} opacity={0.1} />
    </EffectComposer>
  )
}
