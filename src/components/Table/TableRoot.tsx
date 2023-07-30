import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableContainerProps = ComponentProps<'table'> & {
  children: ReactNode
}

export function TableRoot({ children, ...props }: TableContainerProps) {
  return (
    <table {...props} className={twMerge('h-full min-w-full', props.className)}>
      {children}
    </table>
  )
}
