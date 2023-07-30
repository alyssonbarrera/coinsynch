import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  Portal,
  Content,
  TooltipContentProps as RadixTooltipContentProps,
} from '@radix-ui/react-tooltip'

type TooltipContentProps = RadixTooltipContentProps & {
  children: ReactNode
}

export function TooltipContent({ children, ...props }: TooltipContentProps) {
  return (
    <Portal>
      <Content
        {...props}
        side="left"
        sideOffset={10}
        className={twMerge(
          'z-20 select-none rounded bg-primary-500 px-6 py-2 text-sm leading-5 text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
          props.className,
        )}
      >
        {children}
      </Content>
    </Portal>
  )
}
