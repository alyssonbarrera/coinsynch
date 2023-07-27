import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type InputLabelProps = ComponentProps<'label'> & {
  children: ReactNode
}

export function InputLabel({ children, ...props }: InputLabelProps) {
  return (
    <label
      {...props}
      className={twMerge('block text-sm leading-4 text-white', props.className)}
    >
      {children}
    </label>
  )
}
