import { ComponentProps, ReactNode, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

import { useForm } from '@/hooks/useForm'

type FormControlProps = ComponentProps<'form'> & {
  children: ReactNode
  isInvalid?: boolean
}

export function FormControl({
  children,
  isInvalid,
  ...props
}: FormControlProps) {
  const { setIsInvalid } = useForm()

  useEffect(() => {
    setIsInvalid(isInvalid ?? false)
  }, [isInvalid, setIsInvalid])

  return (
    <form
      {...props}
      className={twMerge('flex flex-col gap-4 md:gap-5', props.className)}
      onSubmit={props.onSubmit}
    >
      {children}
    </form>
  )
}
