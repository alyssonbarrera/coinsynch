import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import * as Accordion from '@radix-ui/react-accordion'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ChevronDownIcon } from '@/components/ChevronDownIcon'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type AccordionTitleProps = ComponentPropsWithoutRef<'button'> & {
  children?: React.ReactNode
  className?: string
  title?: string
  acronym?: string
  image?: string | StaticImport
  index: number
}

export const AccordionTitle = forwardRef<
  HTMLButtonElement,
  AccordionTitleProps
>(
  (
    { index, children, title, acronym, image, className, ...props },
    forwardedRef,
  ) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        {...props}
        className={twMerge(
          'group flex h-14 flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none text-color-base outline-none',
          className,
          index % 2 === 0 && 'bg-secondary-100',
        )}
        ref={forwardedRef}
      >
        <div className="flex items-center gap-2">
          {image && (
            <Image src={image} alt={`${title} icon`} width={24} height={24} />
          )}
          {title && acronym && (
            <div className="flex gap-1 text-xs leading-sm md:text-md md:leading-6">
              <p className="capitalize">{title}</p>
              <span className="uppercase text-secondary-500">{acronym}</span>
            </div>
          )}

          {children && children}
        </div>
        <div className="text-primary-300 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180">
          <ChevronDownIcon />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  ),
)

AccordionTitle.displayName = 'AccordionTrigger'
