import { ReactNode, createContext, useState } from 'react'

type ModalContextData = {
  onOpenChange: (modalName: string, open: boolean) => void
  isModalOpen: (modalName: string) => boolean
  onOpen: (modalName: string) => void
  onClose: (modalName: string) => void
}

type ModalProviderProps = {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<string | null>(null)

  const onOpenChange = (modalName: string, open: boolean) => {
    if (open) {
      setModal(modalName)
    } else {
      setModal(null)
    }
  }

  const isModalOpen = (modalName: string) => {
    return modal === modalName
  }

  const onOpen = (modalName: string) => {
    onOpenChange(modalName, true)
  }

  const onClose = (modalName: string) => {
    onOpenChange(modalName, false)
  }

  return (
    <ModalContext.Provider
      value={{
        onOpenChange,
        isModalOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
