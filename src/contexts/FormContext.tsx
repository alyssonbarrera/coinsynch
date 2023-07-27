import { ReactNode, createContext, useState } from 'react'

type FormContextProps = {
  isInvalid: boolean
  setIsInvalid: (isInvalid: boolean) => void
}

type FormContextProviderProps = {
  children: ReactNode
}

export const FormContext = createContext<FormContextProps>(
  {} as FormContextProps,
)

export const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const [isInvalid, setIsInvalid] = useState(false)

  return (
    <FormContext.Provider value={{ isInvalid, setIsInvalid }}>
      {children}
    </FormContext.Provider>
  )
}

export default FormContext
