import { twMerge } from 'tailwind-merge'
import { ReactNode, useState, ComponentProps } from 'react'
import * as Accordion from '@radix-ui/react-accordion'

type AccordionRootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function AccordionRoot({ children, ...props }: AccordionRootProps) {
  const [accordionIsExpanded, setAccordionIsExpanded] = useState(false)

  return (
    <Accordion.Root
      className={twMerge('h-max w-full', props.className)}
      type="single"
      collapsible
      onValueChange={(value) => setAccordionIsExpanded(!!value)}
    >
      <div className="mr-6 flex items-center justify-between text-xs leading-4 text-secondary-500">
        <p>Crypto</p>
        <p>{accordionIsExpanded ? 'Actions' : 'Trade'}</p>
      </div>

      {children}
    </Accordion.Root>
  )
}
