import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type HighlightHeading = HTMLAttributes<HTMLElement> & {
  text: string
  as?: ElementType
}

export function HighlightHeading({
  text,
  as: Element = 'h5',
  ...props
}: HighlightHeading) {
  return (
    <Element
      {...props}
      className={twMerge(
        'text-xl font-bold leading-8 text-color-base md:text-2xl md:leading-8',
        props.className,
      )}
    >
      {text}
    </Element>
  )
}
