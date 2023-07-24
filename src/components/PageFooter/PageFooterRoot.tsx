import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type PageFooterRootProps = HTMLAttributes<HTMLElement> & {
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
