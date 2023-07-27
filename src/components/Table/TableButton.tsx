import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/Button'

type TableButtonProps = ComponentProps<'button'> & {
  children: string
}

export function TableButton({ children, ...props }: TableButtonProps) {
  return (
    <Button.Root
      {...props}
      variant="tertiary"
      className={twMerge('h-8 w-20', props.className)}
    >
      <Button.Content className="text-sm font-normal leading-4">
        {children}
      </Button.Content>
    </Button.Root>
  )
}
