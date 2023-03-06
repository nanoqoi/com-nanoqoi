import { Mesh } from 'three'
import { FC, useEffect, useRef, useState } from 'react'
import { Icon } from 'src/components/icon/Icon'

export const GithubIcon: FC = () => {
  const ref = useRef<Mesh>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    ref.current.scale.x = isHovering ? 1.2 : 1
    ref.current.scale.y = isHovering ? 1.2 : 1
  }, [isHovering])

  const onFrame = () => {
    if (!ref.current) return

    if (isLoading) {
      ref.current.rotation.z -= 0.6
    } else {
      ref.current.rotation.z = 0
    }
  }

  return (
    <group
      onClick={() => {
        setIsLoading(true)
        setTimeout(() => {
          window.open('https://github.com/synqat', '_blank')
          setIsLoading(false)
        }, 1000)
      }}
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
    >
      <Icon
        ref={ref}
        icon={isLoading ? 'loading' : 'github'}
        onFrame={onFrame}
      />
    </group>
  )
}
