import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type IconTagRootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function IconTagRoot({ children, ...props }: IconTagRootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'h-20 w-20 rounded-lg bg-primary-100 shadow-icon-tag md:p-1 xl:p-2',
        props.className,
      )}
    >
      {children}
    </div>
  )
}
