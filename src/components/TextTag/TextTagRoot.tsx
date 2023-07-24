import { twMerge } from 'tailwind-merge'
import { HtmlHTMLAttributes, ReactNode } from 'react'

type TextTagRootProps = HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function TextTagRoot({ children, ...props }: TextTagRootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex h-[1.375rem] w-[4.625rem] items-center justify-center rounded bg-primary-100 md:h-8 md:w-[5.5rem] xl:h-10 xl:w-[6.3125rem]',
        props.className,
      )}
    >
      {children}
    </div>
  )
}
