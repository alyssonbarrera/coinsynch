import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DashboardCryptoCardHeaderProps = ComponentProps<'header'> & {
  title: string
  symbol: string
  image: string
}

export function DashboardCryptoCardHeader({
  title,
  symbol,
  image,
  ...props
}: DashboardCryptoCardHeaderProps) {
  return (
    <header
      className={twMerge(
        'flex h-full max-h-12 w-full items-center justify-center rounded-t-md bg-primary-100 text-xs leading-4',
        props.className,
      )}
    >
      <div className="flex gap-1">
        <Image src={image} alt={title} width={16} height={16} />
        <p className="text-color-base">{title}</p>{' '}
        <span className="uppercase text-secondary-500">{symbol}</span>
      </div>
    </header>
  )
}
