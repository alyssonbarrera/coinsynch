import React, { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { useModal } from '@/hooks/useModal'

type ModalRootProps = Dialog.DialogProps & {
  name: string
  children: ReactNode
}

export function ModalRoot({ children, name, ...props }: ModalRootProps) {
  const { isModalOpen, onOpenChange } = useModal()

  const isOpen = isModalOpen(name)

  const handleChangeModal = (isOpen: boolean) => {
    onOpenChange(name, isOpen)
  }

  const onOpenChangeFunctions = (isOpen: boolean) => {
    handleChangeModal(isOpen)

    const customOnOpenChange = props.onOpenChange

    if (typeof customOnOpenChange === 'function') {
      customOnOpenChange(isOpen)
    }
  }

  return (
    <Dialog.Root {...props} open={isOpen} onOpenChange={onOpenChangeFunctions}>
      <Dialog.Portal>{children}</Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-10 bg-color-base bg-opacity-70 font-base md:bg-opacity-90" />
    </Dialog.Root>
  )
}
