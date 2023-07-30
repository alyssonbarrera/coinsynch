import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type PageFooterContentProps = ComponentProps<'p'> & {
  children: ReactNode
}

export function PageFooterContent({
  children,
  ...props
}: PageFooterContentProps) {
  return (
    <p
      {...props}
      className={twMerge(
        'text-label leading-label text-sm leading-5 text-color-base',
        props.className,
      )}
    >
      {children}
    </p>
  )
}
