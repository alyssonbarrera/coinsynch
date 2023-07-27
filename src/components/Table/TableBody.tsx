import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableBodyProps = ComponentProps<'tbody'> & {
  children: ReactNode
}

export function TableBody({ children, ...props }: TableBodyProps) {
  return (
    <tbody {...props} className={twMerge(props.className)}>
      {children}
    </tbody>
  )
}
