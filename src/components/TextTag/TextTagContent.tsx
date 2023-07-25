import { twMerge } from 'tailwind-merge'
import { HtmlHTMLAttributes, ReactNode } from 'react'

type TextTagContentProps = HtmlHTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export function TextTagContent({ children, ...props }: TextTagContentProps) {
  return (
    <span
      {...props}
      className={twMerge(
        'text-xs leading-sm text-primary-500 md:text-md md:leading-2xl xl:text-xl xl:leading-8',
        props.className,
      )}
    >
      {children}
    </span>
  )
}
