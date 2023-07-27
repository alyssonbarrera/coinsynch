import { useContext } from 'react'
import { FormContext } from '@/contexts/FormContext'

export function useForm() {
  const context = useContext(FormContext)

  return context
}
