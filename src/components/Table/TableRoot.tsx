import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableContainerProps = HTMLAttributes<HTMLTableElement> & {
  children: ReactNode
}

export function TableRoot({ children, ...props }: TableContainerProps) {
  return (
    <table {...props} className={twMerge('min-w-full', props.className)}>
      {children}
    </table>
  )
}
