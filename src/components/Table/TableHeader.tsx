import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableHeaderProps = HTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode
}

export function TableHeader({ children, ...props }: TableHeaderProps) {
  return (
    <th
      {...props}
      className={twMerge(
        'w-4 whitespace-nowrap px-4 py-2 text-secondary-500',
        props.className,
      )}
    >
      {children}
    </th>
  )
}
