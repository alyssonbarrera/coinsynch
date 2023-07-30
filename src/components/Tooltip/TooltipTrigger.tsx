import { ReactNode } from 'react'
import {
  Trigger,
  TooltipTriggerProps as RadixTooltipTriggerProps,
} from '@radix-ui/react-tooltip'

type TooltipTriggerProps = RadixTooltipTriggerProps & {
  children: ReactNode
}

export function TooltipTrigger({ children, ...props }: TooltipTriggerProps) {
  return (
    <Trigger {...props} asChild>
      {children}
    </Trigger>
  )
}
