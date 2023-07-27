import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import * as Accordion from '@radix-ui/react-accordion'
import {
  formatCurrencyPriceWithSpace,
  formatPercentage,
} from '@/utils/currencyUtils'
import { ReactNode, forwardRef } from 'react'

type AccordionContentProps = {
  children?: ReactNode
  className?: string
  price?: number
  change?: number
}

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ price, change, children, ...props }, forwardedRef) => (
  <Accordion.Content
    {...props}
    className={twMerge(
      'h-full overflow-hidden border-t border-secondary-200 text-[15px] data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
      props.className,
    )}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px]">
      {price && change && (
        <div className="space-y-4 text-xs leading-sm md:text-md md:leading-6">
          <div className="flex items-center justify-between">
            <p className="text-secondary-500">Price</p>
            <p className="text-color-base">
              {formatCurrencyPriceWithSpace(price)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-secondary-500">Change</p>
            <p
              className={classNames(
                change > 0 ? 'text-tertiary-700' : 'text-quaternary-700',
              )}
            >
              {`${change > 0 ? '+' : ''}${formatPercentage(change)}%`}
            </p>
          </div>
        </div>
      )}

      {children && children}
    </div>
  </Accordion.Content>
))

AccordionContent.displayName = 'AccordionContent'
