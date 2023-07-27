import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type InputContainerProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function InputContainer({ children, ...props }: InputContainerProps) {
  return (
    <div {...props} className={twMerge('space-y-2', props.className)}>
      {children}
    </div>
  )
}
