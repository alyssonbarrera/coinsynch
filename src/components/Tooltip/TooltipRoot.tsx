import { ReactNode } from 'react'
import { Provider, Root, TooltipProps } from '@radix-ui/react-tooltip'

type TooltipRootProps = TooltipProps & {
  children: ReactNode
}

export function TooltipRoot({ children, ...props }: TooltipRootProps) {
  return (
    <Provider>
      <Root {...props} delayDuration={0}>
        {children}
      </Root>
    </Provider>
  )
}
