import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type FormControlProps = ComponentProps<'form'> & {
  children: ReactNode
}

export function FormControl({ children, ...props }: FormControlProps) {
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
