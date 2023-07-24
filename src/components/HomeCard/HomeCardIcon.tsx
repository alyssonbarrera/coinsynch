import Image, { ImageProps } from 'next/image'

export type HomeCardIconProps = ImageProps

export function HomeCardIcon({ src, ...props }: HomeCardIconProps) {
  return (
    <div className="h-10 w-10 md:h-16 md:w-16">
      <Image {...props} src={src} alt={props.alt} width={64} height={64} />
    </div>
  )
}
