import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type TableHeadProps = ComponentProps<'thead'> & {
  children: ReactNode
}

export function TableHead({ children, ...props }: TableHeadProps) {
  return (
    <thead {...props} className={twMerge('text-left', props.className)}>
      {children}
    </thead>
  )
}
