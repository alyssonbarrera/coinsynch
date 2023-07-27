import { HTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type HighlightSubHeadingProps = HTMLAttributes<ElementType> & {
  text: string
  as?: ElementType
}

export function HighlightSubHeading({
  text,
  as: Element = 'h6',
  ...props
}: HighlightSubHeadingProps) {
  return (
    <Element
      {...props}
      className={twMerge(
        'text-base font-bold text-primary-500',
        props.className,
      )}
    >
      {text}
    </Element>
  )
}
