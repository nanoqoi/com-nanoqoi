import { CustomCursorProvider } from 'src/context/cursor.context'
import { CustomHead } from 'src/components/CustomHead'
import { Scene } from 'src/components/Scene'
import { Cursor } from 'src/components/Cursor'

export default function Home() {
  return (
    <>
      <CustomHead />
      <CustomCursorProvider>
        <Cursor />
        <Scene />
      </CustomCursorProvider>
    </>
  )
}
