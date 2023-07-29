import React, { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

type ModalRootProps = Dialog.DialogProps & {
  children: ReactNode
}

export function ModalRoot({ children, ...props }: ModalRootProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 bg-color-base bg-opacity-90 font-base data-[state=open]:animate-overlayShow" />
        {children}
      </Dialog.Portal>
    </Dialog.Root>
  )
}
