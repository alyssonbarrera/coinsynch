import { forwardRef } from 'react'
import classNames from 'classnames'
import * as Accordion from '@radix-ui/react-accordion'

type AccordionItemProps = {
  value: string
  children: React.ReactNode
  className?: string
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      value={value}
      className={classNames('overflow-hidden', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
)

AccordionItem.displayName = 'AccordionItem'
