import {
  Arrow,
  TooltipArrowProps as RadixTooltipArrowProps,
} from '@radix-ui/react-tooltip'

type TooltipArrowProps = RadixTooltipArrowProps

export function TooltipArrow({ ...props }: TooltipArrowProps) {
  return <Arrow {...props} />
}
