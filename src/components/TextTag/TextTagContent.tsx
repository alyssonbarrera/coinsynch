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
        'text-small-label leading-small-label text-primary-500 md:text-body md:leading-body xl:text-h5 xl:leading-8',
        props.className,
      )}
    >
      {children}
    </span>
  )
}
