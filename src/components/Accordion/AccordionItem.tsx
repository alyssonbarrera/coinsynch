import classNames from 'classnames'
import { ReactNode, forwardRef } from 'react'
import * as Accordion from '@radix-ui/react-accordion'

type AccordionItemProps = {
  value: string
  children: ReactNode
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
