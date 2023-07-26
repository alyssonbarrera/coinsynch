import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/Button'

type TableButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: string
}

export function TableButton({ children, ...props }: TableButtonProps) {
  return (
    <Button.Root
      {...props}
      className={twMerge(
        'h-8 w-20 bg-tertiary-700 hover:bg-tertiary-800',
        props.className,
      )}
    >
      <Button.Content className="text-sm font-normal leading-4">
        {children}
      </Button.Content>
    </Button.Root>
  )
}
