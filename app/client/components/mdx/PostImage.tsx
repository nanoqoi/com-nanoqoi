import { FC } from 'react'
import { Image } from '@chakra-ui/react'
import {
  getRelativePostPath,
  MDXScopedProps,
} from 'app/client/components/mdx/utils'

export interface PostImageProps extends MDXScopedProps {
  src: string
  alt: string
}

export const PostImage: FC<PostImageProps> = ({ src, alt, metadata }) => {
  const url = getRelativePostPath(src, metadata.slug)

  return <Image w="full" src={url} alt={alt} />
}
