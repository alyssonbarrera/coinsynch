import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type DashboardCryptoCardRootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function DashboardCryptoCardRoot({
  children,
  ...props
}: DashboardCryptoCardRootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'max-h-60 min-h-[3.0625rem] w-full min-w-[8rem] rounded-md shadow-dashboard-crypto-card',
        props.className,
      )}
    >
      {children}
    </div>
  )
}
