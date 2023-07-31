import Head from 'next/head'
import dynamic from 'next/dynamic'
import jwtDecode from 'jwt-decode'
import { parseCookies } from 'nookies'
import { toast } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

import { Button } from '@/components/Button'
import { Sidebar } from '@/components/Sidebar'
import { NewsCard } from '@/components/NewsCard'
import { ChartCard } from '@/components/ChartCard'
import { Wallet } from '@/components/Icons/Wallet'
import { PageFooter } from '@/components/PageFooter'
import { BalanceCard } from '@/components/BalanceCard'
import { EmptyWallet } from '@/components/Icons/EmptyWallet'
import { AddCryptoModal } from '@/components/AddCryptoModal'
import { DashboardNavbar } from '@/components/DashboardNavbar'

import { UserDTO } from '@/dtos/UserDTO'
import { CoinDTO } from '@/dtos/CoinDTO'
import { WalletDTO } from '@/dtos/WalletDTO'

import { useAuth } from '@/hooks/useAuth'
import { useModal } from '@/hooks/useModal'
import { useBreakpoint } from '@/hooks/useBreakpoint'

import { withSSRAuth } from '@/utils/withSSRAuth'
import { coingecko } from '@/services/api.coingecko'
import { setupAPIClient } from '@/services/api.core'
import { useWalletStore } from '@/store/walletStore'

const DashboardWalletTable = dynamic(
  () =>
    import('@/components/DashboardWalletTable').then(
      (mod) => mod.DashboardWalletTable,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto h-full self-center">
        <ClipLoader color="#FBAB34" />
      </div>
    ),
  },
)

const DashboardCryptoCardWrapper = dynamic(
  () =>
    import('@/components/DashboardCryptoCardWrapper').then(
      (mod) => mod.DashboardCryptoCardWrapper,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto h-full self-center">
        <ClipLoader color="#FBAB34" />
      </div>
    ),
  },
)

type DashboardProps = {
  user: UserDTO
  popularCryptos: CoinDTO[]
  marketData: {
    prices: Array<number[]>
    marketCaps: Array<number[]>
    totalVolumes: Array<number[]>
  }
}

export default function Dashboard({
  user,
  marketData,
  popularCryptos,
}: DashboardProps) {
  const { setUser } = useAuth()
  const { onOpen } = useModal()
  const { fetchWallet, setWallet } = useWalletStore()
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const { isAbove1280, isAbove768, isBelow768 } = useBreakpoint()

  const handleOpenAddCryptoModal = () => {
    onOpen('add-crypto')
  }

  const chartSeries = [{ name: 'series1', data: marketData?.prices }]
  const balance = fetchWallet()
    ?.map((wallet) => wallet.holding * wallet.coin.current_price)
    .reduce((a, b) => a + b, 0)

  useEffect(() => {
    setSidebarIsOpen(isAbove1280)
  }, [isAbove1280])

  useEffect(() => {
    setUser(user)
    user.wallet && setWallet(user.wallet)
  }, [setUser, setWallet, user])

  return (
    <>
      <Head>
        <title>Dashboard | CoinSynch</title>
      </Head>

      <header className="sticky top-0 font-base">
        <DashboardNavbar
          user={user}
          onOpenSidebar={() => setSidebarIsOpen((prevState) => !prevState)}
        />
      </header>

      <Sidebar isOpen={sidebarIsOpen} />

      <main className="mb-16 min-h-[calc(100vh-128px)] p-6 font-base sm:px-12 sm:pt-10 md:mb-0 md:bg-secondary-100 xl:ml-20 xl:px-16 xl:pt-14">
        <header className="flex flex-wrap items-center justify-between desktop-xl:flex-nowrap desktop-xl:space-x-8">
          <div className="mb-6 w-full desktop-xl:mb-0 desktop-xl:max-w-[37rem]">
            <BalanceCard balance={balance} />
          </div>
          <div className="flex w-full gap-8">
            <div className="flex-1">
              <ChartCard
                chartSeries={chartSeries}
                crypto={
                  fetchWallet()[0]?.coin ||
                  (popularCryptos && popularCryptos[0]) ||
                  null
                }
              />
            </div>
            <div className="flex-1 desktop-xl:min-w-[17.5rem]">
              <NewsCard />
            </div>
          </div>
        </header>

        <section className="mt-8 border-t border-secondary-300 md:rounded-lg md:border-none md:bg-white md:shadow-dashboard-my-wallet-section">
          <header className="flex justify-between py-7 pb-4 md:border-b md:border-secondary-200 md:p-6">
            <div className="flex gap-4">
              <Wallet />{' '}
              <h4 className="text-xl font-bold leading-7 text-color-base sm:text-2xl sm:leading-7">
                My Wallet
              </h4>
            </div>

            <Button.Root
              className="h-8 max-w-[24px] sm:max-w-[7.5rem]"
              onClick={handleOpenAddCryptoModal}
            >
              <Button.Content className="sm:hidden md:text-sm md:leading-5 xl:text-sm xl:leading-5">
                +
              </Button.Content>
              <Button.Content className="hidden sm:block md:text-sm md:leading-5 xl:text-sm xl:leading-5">
                + Add crypto
              </Button.Content>
            </Button.Root>
          </header>

          <div className="flex min-h-[19.25rem] justify-center">
            {fetchWallet().length === 0 && (
              <div className="flex h-full flex-col items-center gap-6 self-center text-center text-color-base">
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
            )}
            {isAbove768 && fetchWallet().length !== 0 && (
              <div className="max-h-[31rem] w-full overflow-y-auto rounded-lg">
                <DashboardWalletTable wallet={fetchWallet()} />
              </div>
            )}
            {isBelow768 && fetchWallet().length !== 0 && (
              <DashboardCryptoCardWrapper wallet={fetchWallet()} />
            )}
          </div>
        </section>
      </main>

      <PageFooter.Root className="sticky bottom-0 flex justify-between bg-white px-12 drop-shadow-dashboard-footer xl:justify-center">
        <PageFooter.Content className="w-full text-center text-xs leading-4 md:w-auto md:text-sm md:leading-5 xl:w-full">
          Copyright © 2023 - All rights reserved
        </PageFooter.Content>
        <PageFooter.Logo className="hidden md:block xl:hidden" />
      </PageFooter.Root>

      <AddCryptoModal cryptos={popularCryptos} />
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (context) => {
  try {
    const apiClient = setupAPIClient(context)

    // because of the nature of the fake API, fetching the token is required to extract the firebase_id for retrieving user data
    const { '@coinsynch:token': token } = parseCookies(
      context,
      '@coinsynch:token',
    )

    const decodedToken = jwtDecode(token) as { user_id: string }

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

    const firstCryptoId = user.wallet[0]?.crypto_id || 'bitcoin'

    const promises = [
      coingecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
        },
      }),
      coingecko.get(`/coins/${firstCryptoId}/market_chart`, {
        params: {
          vs_currency: 'usd',
          days: 1,
        },
      }),
    ]

    const responses = await Promise.allSettled(promises)

    const coingeckoTopCryptosResponse =
      responses[0].status === 'fulfilled' ? responses[0].value.data : []
    const coingeckoMarketChartResponse =
      responses[1].status === 'fulfilled' ? responses[1].value.data : []

    let wallet = []

    if (coingeckoTopCryptosResponse.length > 0 && user.wallet.length > 0) {
      wallet = user.wallet.map((wallet: WalletDTO) => {
        return {
          ...wallet,
          coin: coingeckoTopCryptosResponse.find(
            (crypto: CoinDTO) => crypto.id === wallet.crypto_id,
          ),
        }
      })
    }

    user.wallet = wallet

    return {
      props: {
        user,
        marketData: coingeckoMarketChartResponse,
        popularCryptos: coingeckoTopCryptosResponse,
      },
    }
  } catch {
    return {
      props: {
        user: {},
        marketData: [],
        popularCryptos: [],
      },
    }
  }
})
