import { HTMLAttributes } from 'react'
import { Logo } from '../Logo'

export type PageFooterLogoProps = HTMLAttributes<SVGElement> & {
  size?: number
}

export function PageFooterLogo({ size = 95, ...props }: PageFooterLogoProps) {
  return <Logo {...props} size={size} />
}
