import { ElementType } from 'react'

export type ButtonIconProps = {
  icon: ElementType
}

export function ButtonIcon({ icon: Icon, ...props }: ButtonIconProps) {
  return <Icon {...props} />
}
