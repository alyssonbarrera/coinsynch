import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type FormHelperTextProps = ComponentProps<'p'> & {
  children: ReactNode
}

export function FormHelperText({ children, ...props }: FormHelperTextProps) {
  return (
    <p
      {...props}
      className={twMerge(
        '-mt-2 block text-sm leading-4 text-secondary-200',
        props.className,
      )}
    >
      {children}
    </p>
  )
}
