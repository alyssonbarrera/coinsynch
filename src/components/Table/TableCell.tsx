import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableCellProps = HTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode
}

export function TableCell({ children, ...props }: TableCellProps) {
  return (
    <td
      {...props}
      className={twMerge('whitespace-nowrap px-6 py-4', props.className)}
    >
      {children}
    </td>
  )
}
