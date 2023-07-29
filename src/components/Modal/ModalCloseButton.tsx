import React, { ElementType } from 'react'
import {
  DialogClose as DialogCloseButton,
  DialogCloseProps,
} from '@radix-ui/react-dialog'

import { twMerge } from 'tailwind-merge'

type ModalCloseButtonProps = DialogCloseProps & {
  icon: ElementType
}

export function ModalCloseButton({
  icon: Icon,
  ...props
}: ModalCloseButtonProps) {
  return (
    <DialogCloseButton
      className={twMerge(
        'absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px]',
        props.className,
      )}
      aria-label="Close"
    >
      <Icon />
    </DialogCloseButton>
  )
}
