import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'

import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import { Logout } from '@/components/Icons/Logout'

import { UserDTO } from '@/dtos/UserDTO'
import { useAuth } from '@/hooks/useAuth'
import { ChevronDownIcon } from '../Icons/ChevronDownIcon'

type DropdownMenuProps = {
  defaultOpen?: boolean
  open?: boolean
  user: UserDTO
}

export function DropdownMenu({ user, ...props }: DropdownMenuProps) {
  const { signOut } = useAuth()
  return (
    <>
      <RadixDropdownMenu.Root {...props}>
        <RadixDropdownMenu.Trigger className="flex items-center gap-2 border-none outline-none">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <Avatar aria-label="Menu" image={user.avatar} alt={user.name} />
          </div>
          <p className="hidden text-sm leading-5 text-color-base sm:flex">
            {user.name}
          </p>
          <ChevronDownIcon fill="#ACABB7" className="h-2 w-2" />
        </RadixDropdownMenu.Trigger>

        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] text-xs leading-4 shadow-dropdown-shadow data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            <RadixDropdownMenu.Item className="outline-none">
              <Button.Root
                type="button"
                variant="transparent"
                className="h-8 min-w-[6.25rem] hover:bg-transparent"
                onClick={signOut}
              >
                <Button.Icon icon={Logout} />
                <Button.Content className="text-xs leading-4 text-color-base">
                  Logout
                </Button.Content>
              </Button.Root>
            </RadixDropdownMenu.Item>
            <RadixDropdownMenu.Arrow className="mr-10 fill-white" />
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    </>
  )
}
