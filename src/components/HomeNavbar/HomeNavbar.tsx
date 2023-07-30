import dynamic from 'next/dynamic'
import { Link } from 'react-scroll'
import { ComponentProps } from 'react'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { MenuIcon } from '@/components/Icons/MenuIcon'
import { PopularCryptos } from '@/components/PopularCryptos'

import { CoinDTO } from '@/dtos/CoinDTO'
import { ExchangeRateDTO } from '@/dtos/ExchangeRateDTO'

import { useModal } from '@/hooks/useModal'
import { useBreakpoint } from '@/hooks/useBreakpoint'

const DropdownMenu = dynamic(
  () =>
    import('@/components/HomeNavbar/DropdownMenu').then(
      (mod) => mod.DropdownMenu,
    ),
  {
    ssr: false,
    loading: () => <MenuIcon />,
  },
)

type HomeNavbarProps = ComponentProps<'nav'> & {
  popularCryptosData: CoinDTO[]
  exchangeRateData: ExchangeRateDTO
}

export function HomeNavbar({
  popularCryptosData,
  exchangeRateData,
  ...props
}: HomeNavbarProps) {
  const { isBelow768 } = useBreakpoint()

  const { onOpen } = useModal()

  const handleSignInModalOpenChange = () => {
    onOpen('signin')
  }

  const handleSignUpModalOpenChange = () => {
    onOpen('signup')
  }

  return (
    <>
      <nav
        {...props}
        className="grid grid-cols-home-nav-base place-items-end items-center gap-y-5 pt-5 sm:py-4 md:grid-cols-home-nav-md xl:grid-cols-home-nav-xl xl:justify-between xl:gap-x-10"
      >
        <div className="flex w-full items-center gap-10 pl-4 md:pl-12 xl:pl-28">
          <Logo className="w-[5.875rem] sm:w-auto" />
          <ul className="hidden gap-6 text-xs leading-4 md:flex md:text-sm md:leading-5">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer text-color-base"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="top-cryptos"
                smooth={true}
                duration={500}
                className="cursor-pointer text-color-base"
              >
                Top Cryptos
              </Link>
            </li>
          </ul>
        </div>

        <div className="order-2 col-span-2 flex w-full justify-center border-t border-secondary-200 px-2 py-1 shadow-home-nav xl:order-none xl:col-span-1 xl:justify-end xl:border-none xl:p-0 xl:shadow-none">
          <PopularCryptos
            data={popularCryptosData}
            exchangeRateData={exchangeRateData}
          />
        </div>
        <div className="hidden items-center gap-2 pr-4 md:flex md:pr-12 md:text-sm md:leading-5 xl:pr-28 5xl:pr-0">
          <Button.Root
            onClick={handleSignInModalOpenChange}
            className="h-8 min-w-[6.25rem] max-w-[6.25rem] bg-transparent hover:bg-gray-50 hover:transition-colors"
          >
            <Button.Content className="text-color-base">Sign In</Button.Content>
          </Button.Root>
          <Button.Root
            onClick={handleSignUpModalOpenChange}
            className="h-8 min-w-[6.25rem] max-w-[6.25rem] flex-grow-0"
          >
            <Button.Content className="text-white">Sign Up</Button.Content>
          </Button.Root>
        </div>
        <div className="flex min-h-[24px] min-w-[24px] pr-4 md:hidden">
          {isBelow768 && <DropdownMenu />}
        </div>
      </nav>
    </>
  )
}
