import { twMerge } from 'tailwind-merge'
import { ComponentProps, ReactNode } from 'react'

export type ButtonContentProps = ComponentProps<'span'> & {
  children: ReactNode
}

export function ButtonContent({ children, ...props }: ButtonContentProps) {
  return (
    <span
      {...props}
      className={twMerge(
        'text-sm leading-5 text-white md:text-base',
        props.className,
      )}
    >
      {children}
    </span>
  )
}
