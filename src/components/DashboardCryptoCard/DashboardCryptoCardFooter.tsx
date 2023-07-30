import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/Button'

type DashboardCryptoCardFooterProps = ComponentProps<'footer'>

export function DashboardCryptoCardFooter({
  ...props
}: DashboardCryptoCardFooterProps) {
  return (
    <footer {...props} className={twMerge('px-4', props.className)}>
      <Button.Root className="max-h-6" aria-label="Trade">
        <Button.Content>Trade</Button.Content>
      </Button.Root>
    </footer>
  )
}
