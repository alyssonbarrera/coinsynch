import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableTrProps = HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode
}

export function TableRow({ children, ...props }: TableTrProps) {
  return (
    <tr {...props} className={twMerge('text-secondary-500', props.className)}>
      {children}
    </tr>
  )
}
