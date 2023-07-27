import { useForm } from '@/hooks/useForm'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputRootProps = ComponentProps<'input'>

export function InputRoot({ ...props }: InputRootProps) {
  const { isInvalid } = useForm()

  return (
    <input
      {...props}
      className={twMerge(
        'relative max-h-12 w-full max-w-sm rounded-md bg-white p-4 shadow-input-shadow outline-none selection:bg-secondary-300 placeholder:text-base placeholder:text-secondary-400',
        isInvalid &&
          'text-quaternary-500 outline-2 -outline-offset-2 outline-quaternary-500',
        props.className,
      )}
    />
  )
}
