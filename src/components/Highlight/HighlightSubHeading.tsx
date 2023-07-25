import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type HighlightSubHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
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
        'text-sm font-bold leading-4 text-primary-500 md:text-base md:leading-6',
        props.className,
      )}
    >
      {text}
    </Element>
  )
}
