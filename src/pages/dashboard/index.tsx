import Head from 'next/head'
import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'

import { UserDTO } from '@/dtos/UserDTO'
import { withSSRAuth } from '@/utils/withSSRAuth'

import { Sidebar } from '@/components/Sidebar'
import { Button } from '@/components/Button'
import { NewsCard } from '@/components/NewsCard'
import { ChartCard } from '@/components/ChartCard'
import { Wallet } from '@/components/Icons/Wallet'
import { PageFooter } from '@/components/PageFooter'
import { BalanceCard } from '@/components/BalanceCard'
import { DashboardNavbar } from '@/components/DashboardNavbar'

import { setupAPIClient } from '@/services/api.core'
import { EmptyWallet } from '@/components/Icons/EmptyWallet'
import { useEffect, useState } from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'

type DashboardProps = {
  user: UserDTO
}

export default function Dashboard({ user }: DashboardProps) {
  const chartSeries = [
    { name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] },
  ]

  const { isAbove1280 } = useBreakpoint()

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  useEffect(() => {
    setSidebarIsOpen(isAbove1280)
  }, [isAbove1280])

  return (
    <>
      <Head>
        <title>Dashboard | CoinSynch</title>
      </Head>

      <header className="font-base">
        <DashboardNavbar
          user={user}
          onOpenSidebar={() => setSidebarIsOpen((prevState) => !prevState)}
        />
      </header>

      <Sidebar isOpen={sidebarIsOpen} />

      <main className="h-full min-h-[calc(100vh-128px)] bg-secondary-100 p-6 font-base sm:px-12 sm:pt-10 xl:ml-20 xl:px-16 xl:pt-14">
        <header className="flex flex-wrap items-center justify-between desktop-xl:flex-nowrap desktop-xl:space-x-8">
          <div className="mb-6 w-full desktop-xl:mb-0 desktop-xl:max-w-[37rem]">
            <BalanceCard />
          </div>
          <div className="flex w-full gap-8">
            <div className="flex-1">
              <ChartCard chartSeries={chartSeries} />
            </div>
            <div className="flex-1 desktop-xl:min-w-[17.5rem]">
              <NewsCard />
            </div>
          </div>
        </header>

        <section className="mt-8 h-full rounded-lg bg-white shadow-dashboard-my-wallet-section">
          <header className="flex justify-between border-b border-secondary-200 p-6">
            <div className="flex gap-4">
              <Wallet />{' '}
              <h4 className="text-xl font-bold leading-7 text-color-base sm:text-2xl sm:leading-7">
                My Wallet
              </h4>
            </div>

            <Button.Root className="h-8 max-w-[24px] sm:max-w-[7.5rem]">
              <Button.Content className="sm:hidden md:text-sm md:leading-5 xl:text-sm xl:leading-5">
                +
              </Button.Content>
              <Button.Content className="hidden sm:block md:text-sm md:leading-5 xl:text-sm xl:leading-5">
                + Add crypto
              </Button.Content>
            </Button.Root>
          </header>

          <div className="flex h-[19.25rem] items-center justify-center">
            <div className="flex flex-col items-center gap-6 text-center text-color-base">
              <EmptyWallet />
              <div className="space-y-2">
                <h5 className="text-base font-bold md:text-xl md:leading-7">
                  Nothing here yet...
                </h5>
                <p className="text-xs leading-4 md:text-sm md:leading-5">
                  Add a crypto and start earning
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PageFooter.Root className="flex justify-between bg-white px-12 drop-shadow-dashboard-footer xl:justify-center">
        <PageFooter.Content className="w-full text-center text-xs leading-4 md:w-auto md:text-sm md:leading-5 xl:w-full">
          Copyright © 2023 - All rights reserved
        </PageFooter.Content>
        <PageFooter.Logo className="hidden md:block xl:hidden" />
      </PageFooter.Root>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (context) => {
  // because of the nature of the fake API, fetching the token is required to extract the firebase_id for retrieving user data
  const { '@coinsynch:token': token } = parseCookies(
    context,
    '@coinsynch:token',
  )

  const decodedToken = jwtDecode(token) as { user_id: string }

  const apiClient = setupAPIClient(context)

  try {
    const { data } = await apiClient.get('/users', {
      params: {
        firebase_id: decodedToken.user_id,
      },
    })

    const user = data[0]

    if (!user) {
      return {
        props: {},
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return {
      props: {
        user,
      },
    }
  } catch {
    return {
      props: {
        user: {},
      },
    }
  }
})
