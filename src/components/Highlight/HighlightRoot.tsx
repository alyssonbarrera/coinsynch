import { ComponentProps, ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type HighlightRootProps = ComponentProps<ElementType> & {
  children: ReactNode
}

export function HighlightRoot({ children, ...props }: HighlightRootProps) {
  return (
    <div {...props} className={twMerge('flex flex-col', props.className)}>
      {children}
    </div>
  )
}
