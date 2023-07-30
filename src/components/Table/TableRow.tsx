import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableTrProps = ComponentProps<'tr'> & {
  children: ReactNode
}

export function TableRow({ children, ...props }: TableTrProps) {
  return (
    <tr
      {...props}
      className={twMerge('h-full max-h-16 text-secondary-500', props.className)}
    >
      {children}
    </tr>
  )
}
