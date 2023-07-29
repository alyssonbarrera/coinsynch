import React, { ReactNode, forwardRef, ForwardRefRenderFunction } from 'react'
import {
  Content as DialogContent,
  DialogContentProps,
} from '@radix-ui/react-dialog'
import { twMerge } from 'tailwind-merge'

type ModalContentProps = DialogContentProps & {
  children: ReactNode
}

const ModalContentComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  ModalContentProps
> = ({ children, ...props }, ref) => {
  return (
    <DialogContent
      {...props}
      ref={ref}
      onOpenAutoFocus={(event) => event.preventDefault()}
      className={twMerge(
        'fixed left-[50%] top-[50%] z-10 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-8 font-base shadow-modal-shadow data-[state=open]:animate-contentShow',
        props.className,
      )}
    >
      {children}
    </DialogContent>
  )
}

export const ModalContent = forwardRef(ModalContentComponent)
