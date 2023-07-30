import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/Button'

type TableButtonProps = ComponentProps<'button'> & {
  children: string | ReactNode
  buttonType?:
    | 'tertiary'
    | 'primary'
    | 'secondary'
    | 'quaternary'
    | 'transparent'
}

export function TableButton({
  children,
  buttonType,
  ...props
}: TableButtonProps) {
  return (
    <Button.Root
      {...props}
      variant={buttonType}
      className={twMerge('h-8 w-20', props.className)}
    >
      <Button.Content className="text-sm font-normal leading-4">
        {children}
      </Button.Content>
    </Button.Root>
  )
}
