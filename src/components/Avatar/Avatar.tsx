import * as RadixAvatar from '@radix-ui/react-avatar'
import { twMerge } from 'tailwind-merge'

type AvatarProps = RadixAvatar.AvatarProps & {
  image: string
  alt: string
}

export function Avatar({ image, alt, ...props }: AvatarProps) {
  return (
    <RadixAvatar.Root
      {...props}
      className={twMerge(
        'inline-flex h-full w-full select-none items-center justify-center overflow-hidden rounded-full align-middle',
        props.className,
      )}
    >
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={image}
        alt={alt}
      />
      <RadixAvatar.Fallback
        className="leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        {alt
          ?.split(' ')
          .map((name) => name[0])
          .join('') || alt}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
