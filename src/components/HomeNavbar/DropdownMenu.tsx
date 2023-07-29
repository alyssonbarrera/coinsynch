import { Link } from 'react-scroll'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/Button'
import { MenuIcon } from '@/components/Icons/MenuIcon'

type DropdownMenuProps = {
  defaultOpen?: boolean
  open?: boolean
}

const SignInModal = dynamic(
  () =>
    import('@/components/SignInModal/SignInModal').then(
      (mod) => mod.SignInModal,
    ),
  {
    ssr: false,
  },
)
const SignUpModal = dynamic(
  () =>
    import('@/components/SignUpModal/SignUpModal').then(
      (mod) => mod.SignUpModal,
    ),
  {
    ssr: false,
  },
)

export function DropdownMenu({ ...props }: DropdownMenuProps) {
  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false)
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false)

  return (
    <>
      <RadixDropdownMenu.Root {...props}>
        <RadixDropdownMenu.Trigger asChild className="border-none outline-none">
          <button
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white"
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
        </RadixDropdownMenu.Trigger>

        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] text-xs leading-4 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            <RadixDropdownMenu.Item className="h-8 text-center outline-none">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="flex h-full w-full cursor-pointer items-center justify-center text-color-base"
              >
                About us
              </Link>
            </RadixDropdownMenu.Item>
            <RadixDropdownMenu.Item className="h-8 text-center outline-none">
              <Link
                to="top-cryptos"
                smooth={true}
                duration={500}
                className="flex h-full w-full cursor-pointer items-center justify-center text-color-base"
              >
                Top Cryptos
              </Link>
            </RadixDropdownMenu.Item>
            <RadixDropdownMenu.Item className="outline-none">
              <Button.Root
                type="button"
                variant="transparent"
                className="h-8 min-w-[6.25rem]"
                onClick={() => setSignInModalIsOpen(true)}
              >
                <Button.Content className="text-xs leading-4 text-color-base">
                  Sign In
                </Button.Content>
              </Button.Root>
            </RadixDropdownMenu.Item>
            <RadixDropdownMenu.Item className="outline-none">
              <Button.Root
                type="button"
                className="max-h-8 min-w-[6.25rem] flex-grow-0"
              >
                <Button.Content className="text-xs leading-4 text-white">
                  Sign Up
                </Button.Content>
              </Button.Root>
            </RadixDropdownMenu.Item>
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>

      <SignInModal
        isModalOpen={signInModalIsOpen}
        setIsModalOpen={setSignInModalIsOpen}
      />

      <SignUpModal
        isModalOpen={signUpModalIsOpen}
        setIsModalOpen={setSignUpModalIsOpen}
      />
    </>
  )
}
