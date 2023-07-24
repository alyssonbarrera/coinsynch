import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type PageFooterContentProps = HTMLAttributes<HTMLElement> & {
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
        'text-label leading-label text-color-base',
        props.className,
      )}
    >
      {children}
    </p>
  )
}
