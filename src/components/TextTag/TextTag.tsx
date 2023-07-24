import { HtmlHTMLAttributes, ReactNode } from 'react'

import { TextTagRoot } from './TextTagRoot'
import { TextTagContent } from './TextTagContent'

export type TextTagProps = HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const TextTag = {
  Root: TextTagRoot,
  Content: TextTagContent,
}
