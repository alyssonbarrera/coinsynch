import { twMerge } from 'tailwind-merge'
import { HTMLAttributes, ReactNode } from 'react'

export type ButtonContentProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode
}

export function ButtonContent({ children, ...props }: ButtonContentProps) {
  return (
    <span
      {...props}
      className={twMerge('text-sm text-white md:text-base', props.className)}
    >
      {children}
    </span>
  )
}
