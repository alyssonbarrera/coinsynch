import { ComponentProps } from 'react'

import { Logo } from '@/components/Logo'
import { DropdownMenu } from './DropdownMenu'
import { MenuIcon } from '@/components/Icons/MenuIcon'

import { UserDTO } from '@/dtos/UserDTO'

type DashboardNavbarProps = ComponentProps<'nav'> & {
  user: UserDTO
  onOpenSidebar?: () => void
}

export function DashboardNavbar({
  user,
  onOpenSidebar = () => ({}),
  ...props
}: DashboardNavbarProps) {
  return (
    <nav
      {...props}
      className="flex items-center justify-between bg-white px-6 py-4 drop-shadow-dashboard-nav sm:px-12 xl:px-10"
    >
      <button type="button" onClick={onOpenSidebar} className="xl:hidden">
        <MenuIcon />
      </button>

      <Logo className="w-[5.875rem] sm:w-auto" />

      <DropdownMenu user={user} />
    </nav>
  )
}
