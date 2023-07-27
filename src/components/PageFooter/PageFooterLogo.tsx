import { ComponentProps } from 'react'
import { Logo } from '@/components/Logo'

export type PageFooterLogoProps = ComponentProps<'svg'> & {
  size?: number
}

export function PageFooterLogo({ size = 95, ...props }: PageFooterLogoProps) {
  return <Logo {...props} size={size} />
}
