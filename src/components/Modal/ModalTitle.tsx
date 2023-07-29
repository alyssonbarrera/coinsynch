import React, { ReactNode } from 'react'
import { Title as DialogTitle, DialogTitleProps } from '@radix-ui/react-dialog'

import { twMerge } from 'tailwind-merge'

type ModalTitleProps = DialogTitleProps & {
  children: ReactNode
}

export function ModalTitle({ children, ...props }: ModalTitleProps) {
  return (
    <DialogTitle className={twMerge(props.className)}>{children}</DialogTitle>
  )
}
