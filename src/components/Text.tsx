import { FontLoader, TextGeometryParameters } from 'three-stdlib'
import { Font } from 'three-stdlib/loaders/FontLoader'
import { getDefault } from 'src/utils/getDefault'
import { FC, useMemo } from 'react'
import { theme } from 'src/constants'

const fontBlob = await getDefault(
  import('src/assets/new-rodin-m.json') as unknown as Promise<{
    default: Font['data']
  }>,
)
const fontLoader = new FontLoader()

export const Text: FC<{ text: string; size: number }> = ({
  text,
  size = 1,
}) => {
  const font = useMemo(() => fontLoader.parse(fontBlob), [])

  const textOptions: TextGeometryParameters = useMemo(
    () => ({
      font,
      size: 0.3 * size,
      height: 0.02 * size,
      letterSpacing: 0.4 * size,
    }),
    [font, size],
  )

  return (
    <mesh>
      <textGeometry attach="geometry" args={[text, textOptions]} />
      <meshBasicMaterial attach="material" color={theme.colors.foreground} />
    </mesh>
  )
}
