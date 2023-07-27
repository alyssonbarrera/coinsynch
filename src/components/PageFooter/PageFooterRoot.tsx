import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type PageFooterRootProps = ComponentProps<'footer'> & {
  children: ReactNode
}

export function PageFooterRoot({ children, ...props }: PageFooterRootProps) {
  return (
    <footer
      {...props}
      className={twMerge(
        'flex h-16 w-full items-center justify-center',
        props.className,
      )}
    >
      {children}
    </footer>
  )
}
