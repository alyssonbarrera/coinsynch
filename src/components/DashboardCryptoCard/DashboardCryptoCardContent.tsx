import {
  formatCurrencyPriceToUSDWithSpace,
  formatPercentage,
} from '@/utils/currencyUtils'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DashboardCryptoCardContentProps = ComponentProps<'div'> & {
  price: number
  holding: number
  change: number
  symbol: string
}

export function DashboardCryptoCardContent({
  price,
  holding,
  symbol,
  change,
  ...props
}: DashboardCryptoCardContentProps) {
  return (
    <div {...props} className={twMerge('p-4', props.className)}>
      <div className={twMerge('space-y-1 border-b border-secondary-200 pb-4')}>
        <p className="text-xs leading-4 text-secondary-500">Holdings</p>
        <p className="text-sm leading-5 text-color-base">
          {formatCurrencyPriceToUSDWithSpace(price)}
        </p>
        <p className="text-xs uppercase leading-4 text-primary-400">
          {holding} {symbol}
        </p>
      </div>

      <div className={twMerge('space-y-1 border-t border-secondary-200 pt-4')}>
        <p className="text-xs leading-4 text-secondary-500">Change</p>
        <p
          className={twMerge(
            'text-sm leading-5',
            change > 0 ? 'text-tertiary-700' : 'text-quaternary-700',
          )}
        >
          {change > 0 ? '+' : ''}
          {formatPercentage(change)}%
        </p>
      </div>
    </div>
  )
}
