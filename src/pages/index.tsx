import Head from 'next/head'
import dynamic from 'next/dynamic'
import { GetServerSideProps } from 'next'
import { ClipLoader } from 'react-spinners'

import { Button } from '@/components/Button'
import { TextTag } from '@/components/TextTag'
import { PageFooter } from '@/components/PageFooter'
import { HomeNavbar } from '@/components/HomeNavbar'
import { ArrowRight } from '@/components/ArrowRight'

import { coingecko } from '@/services/api.coingecko'
import { exchangerate } from '@/services/api.exchangerate'

import { CoinDTO } from '@/dtos/CoinDTO'
import { ExchangeRateDTO } from '@/dtos/ExchangeRateDTO'

import { useBreakpoint } from '@/hooks/useBreakpoint'

const HomePageImagesCarousel = dynamic(
  () =>
    import('@/components/HomePageImagesCarousel').then(
      (mod) => mod.HomePageImagesCarousel,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto hidden md:block">
        <ClipLoader color="#FBAB34" size={50} />
      </div>
    ),
  },
)

type HomeProps = {
  popularCryptos: CoinDTO[]
  exchangeRate: ExchangeRateDTO
  error?: boolean
}

export default function Home({ popularCryptos, exchangeRate }: HomeProps) {
  const { isAbove768 } = useBreakpoint()

  return (
    <>
      <Head>
        <title>CoinSynch</title>
      </Head>
      <header className="mx-auto max-w-[2560px] font-base">
        <HomeNavbar
          popularCryptosData={popularCryptos}
          exchangeRateData={exchangeRate}
        />
      </header>
      <main className="mx-auto flex max-w-[2560px] items-center justify-center px-6 pt-14 font-base font-base md:justify-between md:pr-0 md:pt-[3.875rem] xl:pb-14 xl:pl-28 xl:pt-[6.25rem] 5xl:pl-0">
        <section className="pr-0 md:pr-5">
          <div className="mx-auto flex max-w-[36.875rem] flex-col gap-2 text-center md:mx-0 md:gap-4 md:text-left xl:gap-6">
            <p className="text-h5 font-bold leading-h5 text-primary-500 md:text-h3 md:leading-h3 xl:text-h1 xl:leading-h1 xl:-tracking-h1">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="max-w-md text-label leading-6 text-color-base md:max-w-none md:text-body xl:text-h5 xl:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <div className="mt-6 w-full xl:mt-8">
            <Button.Root className="mx-auto h-8 max-w-[11.25rem] md:mx-0 md:h-12 md:max-w-[14.5rem] xl:max-w-[17.375rem]">
              <Button.Content className="font-normal uppercase md:font-bold">
                Sign Up Now
              </Button.Content>
              <Button.Icon icon={ArrowRight} color="white" size={16} />
            </Button.Root>
          </div>
          <div className="mt-6 flex justify-center gap-4 md:mt-10 md:justify-start md:gap-6 xl:mt-20 xl:gap-12">
            <TextTag.Root>
              <TextTag.Content>Cryptos</TextTag.Content>
            </TextTag.Root>
            <TextTag.Root>
              <TextTag.Content>NFTs</TextTag.Content>
            </TextTag.Root>
            <TextTag.Root>
              <TextTag.Content>Games</TextTag.Content>
            </TextTag.Root>
          </div>
        </section>
        {isAbove768 && <HomePageImagesCarousel />}
      </main>
      <div className="h-[15.4375rem] w-full bg-home-wave bg-cover bg-top bg-no-repeat" />
      <PageFooter.Root className="flex justify-center md:justify-between md:px-12 xl:px-28">
        <PageFooter.Content className="hidden md:block">
          Copyright © 2022 - All rights reserved
        </PageFooter.Content>
        <PageFooter.Logo />
      </PageFooter.Root>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
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
      exchangerate.get('/latest/USD'),
    ]

    const responses = await Promise.all(promises)

    const coingeckoResponse = responses[0].data
    const exchangerateResponse = responses[1].data

    return {
      props: {
        popularCryptos: coingeckoResponse,
        exchangeRate: exchangerateResponse,
        error: false,
      },
    }
  } catch (error) {
    return {
      props: {
        popularCryptos: [],
        exchangeRate: {},
        error: true,
      },
    }
  }
}
