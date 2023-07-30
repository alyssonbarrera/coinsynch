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
        'min-h-[15.5rem] w-full min-w-[8rem] max-w-[8rem] rounded-md shadow-dashboard-crypto-card min-[385px]:max-w-[10rem]',
        props.className,
      )}
    >
      {children}
    </div>
  )
}
