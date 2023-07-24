import Image, { ImageProps } from 'next/image'

export type IconTagContentProps = ImageProps

export function IconTagContent({ src, ...props }: IconTagContentProps) {
  return <Image {...props} src={src} alt={props.alt} width={64} height={64} />
}
