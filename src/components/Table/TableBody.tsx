import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode
}

export function TableBody({ children, ...props }: TableBodyProps) {
  return (
    <tbody {...props} className={twMerge(props.className)}>
      {children}
    </tbody>
  )
}
