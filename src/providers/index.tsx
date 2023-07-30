import { AuthProvider } from '@/contexts/AuthContext'
import { ModalProvider } from '@/contexts/ModalContext'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  )
}
