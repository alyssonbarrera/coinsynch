import React, { ReactNode } from 'react'
import {
  Description as DialogDescription,
  DialogDescriptionProps,
} from '@radix-ui/react-dialog'

import { twMerge } from 'tailwind-merge'

type ModalDescriptionProps = DialogDescriptionProps & {
  children: ReactNode
}

export function ModalDescription({
  children,
  ...props
}: ModalDescriptionProps) {
  return (
    <DialogDescription className={twMerge(props.className)}>
      {children}
    </DialogDescription>
  )
}
