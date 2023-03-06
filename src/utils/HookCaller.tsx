import { FC } from 'react'

export const HookCaller: FC<{
  hook: (...args: any[]) => void
  props?: any
}> = ({ hook: useProvidedHook, props }) => {
  useProvidedHook(props)
  return null
}
