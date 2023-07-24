import { ElementType } from 'react'
import { LucideProps } from 'lucide-react'

export type ButtonIconProps = LucideProps & {
  icon: ElementType<LucideProps> | ElementType
}

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  return <Icon {...rest} className="mb-[0.125rem]" />
}
