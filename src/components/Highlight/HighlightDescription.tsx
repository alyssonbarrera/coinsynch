import { HTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

type HighlightDescriptionProps = HTMLAttributes<HTMLHeadingElement> & {
  text: string
  as?: ElementType
}

export function HighlightDescription({
  text,
  as: Element = 'p',
  ...props
}: HighlightDescriptionProps) {
  return (
    <Element
      {...props}
      className={twMerge(
        'break-words text-base text-color-base',
        props.className,
      )}
    >
      {text}
    </Element>
  )
}
