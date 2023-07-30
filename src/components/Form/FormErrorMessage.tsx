import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type FormErrorMessageProps = ComponentProps<'p'> & {
  children: string | ReactNode
}

export function FormErrorMessage({
  children,
  ...props
}: FormErrorMessageProps) {
  return (
    <p
      {...props}
      className={twMerge(
        '-mt-2 block text-xs leading-4 text-quaternary-600 xl:text-sm xl:leading-4',
        props.className,
      )}
    >
      {children}
    </p>
  )
}
