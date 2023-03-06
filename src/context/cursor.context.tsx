import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

export enum CustomCursor {
  DEFAULT = 'default',
  POINTER = 'pointer',
}

export const CustomCursorContext = createContext<{
  cursor: CustomCursor
  setCursor(newCursor: CustomCursor): void
}>({
  cursor: CustomCursor.DEFAULT,
  setCursor: () => {},
})

export const useCursor = () => useContext(CustomCursorContext)

export const CustomCursorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cursor, setCursor] = useState(CustomCursor.DEFAULT)

  return (
    <CustomCursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CustomCursorContext.Provider>
  )
}
