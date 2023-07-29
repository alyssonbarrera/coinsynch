import { twMerge } from 'tailwind-merge'
import { ComponentProps, ReactNode } from 'react'

type TextTagContentProps = ComponentProps<'span'> & {
  children: ReactNode
}

export function TextTagContent({ children, ...props }: TextTagContentProps) {
  return (
    <span
      {...props}
      className={twMerge(
        'text-xs leading-4 text-primary-500 md:text-md md:leading-6 xl:text-xl xl:leading-8',
        props.className,
      )}
    >
      {children}
    </span>
  )
}
