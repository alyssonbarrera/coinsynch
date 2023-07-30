import { tv } from 'tailwind-variants'

import { Tooltip } from '@/components/Tooltip'
import { Chart } from '@/components/Icons/Chart'
import { Crypto } from '@/components/Icons/Crypto'
import { Wallet } from '@/components/Icons/Wallet'
import { Bitcoin } from '@/components/Icons/Bitcoin'
import { EclipseArrowLeft } from '../Icons/EclipseArrowLeft'

type SidebarProps = {
  isOpen?: boolean
}

const sidebar = tv({
  base: 'absolute left-0 z-10 top-16 h-[calc(100vh-128px)] border-y border-secondary-300 bg-secondary-900 bg-opacity-70 border-r xl:bg-transparent',
  variants: {
    isOpen: {
      true: 'flex animate-slideRightAndFade w-full xl:w-max',
      false: 'w-0 hidden',
    },
  },
  defaultVariants: {
    isOpen: false,
  },
})

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={sidebar({ isOpen })}>
      <nav className="flex w-[15rem] flex-col justify-between bg-white px-6 xl:w-20">
        <ul className="mt-12 flex flex-col gap-8">
          <li>
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <button className="flex items-center gap-4">
                  <Wallet />
                  <p className="text-sm leading-5 text-color-base xl:hidden">
                    Lorem Ipsum
                  </p>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                Lorem ipsum
                <Tooltip.Arrow className="fill-primary-500" />
              </Tooltip.Content>
            </Tooltip.Root>
          </li>
          <li>
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <button className="flex items-center gap-4">
                  <Crypto />
                  <p className="text-sm leading-5 text-color-base xl:hidden">
                    Lorem Ipsum
                  </p>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                Lorem ipsum
                <Tooltip.Arrow className="fill-primary-500" />
              </Tooltip.Content>
            </Tooltip.Root>
          </li>
          <li>
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <button className="flex items-center gap-4">
                  <Bitcoin />
                  <p className="text-sm leading-5 text-color-base xl:hidden">
                    Lorem Ipsum
                  </p>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                Lorem ipsum
                <Tooltip.Arrow className="fill-primary-500" />
              </Tooltip.Content>
            </Tooltip.Root>
          </li>
          <li>
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <button className="flex items-center gap-4">
                  <Chart />
                  <p className="text-sm leading-5 text-color-base xl:hidden">
                    Lorem Ipsum
                  </p>
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                Lorem ipsum
                <Tooltip.Arrow className="fill-primary-500" />
              </Tooltip.Content>
            </Tooltip.Root>
          </li>
          <li className="mt-20 w-full xl:hidden">
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <button className="flex items-center gap-4">
                  <EclipseArrowLeft />
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                Lorem ipsum
                <Tooltip.Arrow className="fill-primary-500" />
              </Tooltip.Content>
            </Tooltip.Root>
          </li>
        </ul>
      </nav>
    </div>
  )
}
