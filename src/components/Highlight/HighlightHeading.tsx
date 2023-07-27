import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type HighlightHeadingProps = HTMLAttributes<HTMLElement> & {
  text: string
  as?: ElementType
}

export function HighlightHeading({
  text,
  as: Element = 'h5',
  ...props
}: HighlightHeadingProps) {
  return (
    <Element
      {...props}
      className={twMerge(
        'text-xl font-bold leading-6 text-color-base',
        props.className,
      )}
    >
      {text}
    </Element>
  )
}
