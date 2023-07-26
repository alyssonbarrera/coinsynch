import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { ClipLoader } from 'react-spinners'

import { Button } from '@/components/Button'
import { TextTag } from '@/components/TextTag'
import { Highlight } from '@/components/Highlight'
import { PageFooter } from '@/components/PageFooter'
import { HomeNavbar } from '@/components/HomeNavbar'
import { ArrowRight } from '@/components/ArrowRight'

import { coingecko } from '@/services/api.coingecko'
import { exchangerate } from '@/services/api.exchangerate'

import { CoinDTO } from '@/dtos/CoinDTO'
import { ExchangeRateDTO } from '@/dtos/ExchangeRateDTO'

import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Accordion } from '@/components/Accordion'

import { useState } from 'react'
import { Plus } from '@/components/Plus'
import { Table } from '@/components/Table'
import {
  formatCurrencyPriceWithSpace,
  formatPercentage,
} from '@/utils/currencyUtils'
import classNames from 'classnames'

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

const HomePageInfoCardsCarousel = dynamic(
  () =>
    import('@/components/HomePageInfoCardsCarousel').then(
      (mod) => mod.HomePageInfoCardsCarousel,
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

const HomePageInfoCardWrapper = dynamic(
  () =>
    import('@/components/HomePageInfoCardWrapper').then(
      (mod) => mod.HomePageInfoCardWrapper,
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

const HomePageTopCryptosAccordion = dynamic(
  () =>
    import('@/components/HomePageTopCryptosAccordion').then(
      (mod) => mod.HomePageTopCryptosAccordion,
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

const HomePageTopCryptosTable = dynamic(
  () =>
    import('@/components/HomePageTopCryptosTable').then(
      (mod) => mod.HomePageTopCryptosTable,
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
  const { isAbove768, isBelow768 } = useBreakpoint()
  const [numberOfResults, setNumberOfResults] = useState(4)

  let popularCryptosCopy = [...popularCryptos]

  if (popularCryptosCopy.length > numberOfResults) {
    popularCryptosCopy = popularCryptosCopy.slice(0, numberOfResults)
  }

  const handleViewPopularCryptos = () => {
    if (numberOfResults === 4) {
      setNumberOfResults(10)
    } else {
      setNumberOfResults(4)
    }
  }

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
      <main className="mx-auto flex max-w-[2560px] items-center justify-center px-6 pt-14 font-base md:justify-between md:pr-0 md:pt-[3.875rem] xl:pb-14 xl:pl-28 xl:pt-[6.25rem] 5xl:pl-0">
        <section className="pr-0 md:pr-5">
          <div className="mx-auto flex max-w-[36.875rem] flex-col gap-2 text-center md:mx-0 md:gap-4 md:text-left xl:gap-6">
            <p className="text-xl font-bold leading-8 text-primary-500 md:text-h3 md:leading-h3 xl:text-h1 xl:leading-h1 xl:-tracking-h1">
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
              <Button.Content className="text-sm font-normal uppercase leading-4 md:font-bold">
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

      <section className="bg-home-section-two pt-14 font-base md:space-y-10 md:px-12 md:py-20 xl:flex xl:flex-row-reverse xl:items-center xl:justify-between xl:pb-[8.125rem] xl:pl-28 xl:pt-[7.5rem]">
        <div className="px-6 md:mx-auto md:mb-4 md:max-w-[30.875rem] md:px-0 xl:mx-0 xl:mb-0 xl:ml-8 xl:mr-28 xl:max-w-[25.5rem]">
          <Highlight.Root>
            <Highlight.SubHeading
              as="h5"
              text="Lorem ipsum"
              className="mb-1 text-md xl:text-xl xl:leading-3xl"
            />
            <Highlight.Heading
              as="h4"
              text="Lorem ipsum"
              className="mb-4 text-2xl leading-3xl md:text-3xl md:leading-4xl xl:text-4xl xl:leading-5xl xl:-tracking-tight"
            />
            <Highlight.Description
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
              className="md:text-md md:leading-2xl"
            />
          </Highlight.Root>

          <Button.Root className="mx-auto mt-10 hidden h-12 max-w-[11rem] md:mx-0 xl:block">
            <Button.Content className="font-normal">Sign up now</Button.Content>
          </Button.Root>
        </div>

        {isBelow768 && <HomePageInfoCardsCarousel />}
        {isAbove768 && <HomePageInfoCardWrapper />}
      </section>

      <section className="space-y-4 px-6 py-14 font-base md:py-20 xl:py-[7.5rem]">
        <h3 className="text-center text-xl font-bold leading-8 text-color-base md:text-2xl xl:text-3xl xl:leading-4xl">
          Top Cryptos
        </h3>

        {isBelow768 && (
          <HomePageTopCryptosAccordion popularCryptos={popularCryptosCopy} />
        )}

        {isAbove768 && (
          <HomePageTopCryptosTable popularCryptos={popularCryptosCopy} />
        )}

        <Button.Root
          className="mx-auto mt-10 h-12 max-w-[11rem] bg-transparent hover:bg-transparent"
          onClick={handleViewPopularCryptos}
        >
          <Button.Content className="text-md font-normal leading-6 text-primary-500">
            {numberOfResults === 4 ? 'View more' : 'View less'}
          </Button.Content>
          {numberOfResults === 4 && <Button.Icon icon={Plus} color="white" />}
        </Button.Root>
      </section>

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
