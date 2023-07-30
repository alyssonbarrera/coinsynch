import { z } from 'zod'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { toast } from 'react-hot-toast'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'

import { Plus } from '@/components/Plus'
import { Form } from '@/components/Form'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { TextTag } from '@/components/TextTag'
import { Highlight } from '@/components/Highlight'
import { PageFooter } from '@/components/PageFooter'
import { HomeNavbar } from '@/components/HomeNavbar'
import { ArrowRight } from '@/components/Icons/ArrowRight'

import { api } from '@/services/api.client'
import { coingecko } from '@/services/api.coingecko'
import { exchangerate } from '@/services/api.exchangerate'

import { CoinDTO } from '@/dtos/CoinDTO'
import { ExchangeRateDTO } from '@/dtos/ExchangeRateDTO'

import { useBreakpoint } from '@/hooks/useBreakpoint'
import { userValidations } from '@/validations/userValidations'

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
}

const subscribeFormSchema = userValidations.schemas.subscribe

type SubscribeFormSchema = z.infer<typeof subscribeFormSchema>

export default function Home({ popularCryptos, exchangeRate }: HomeProps) {
  const { isAbove768, isBelow768 } = useBreakpoint()
  const [numberOfResults, setNumberOfResults] = useState(4)

  let popularCryptosCopy = [...popularCryptos]

  if (popularCryptosCopy.length > numberOfResults) {
    popularCryptosCopy = popularCryptosCopy.slice(0, numberOfResults)
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeFormSchema>({
    resolver: zodResolver(subscribeFormSchema),
  })

  const onSubmitSubscribeForm: SubmitHandler<SubscribeFormSchema> = async (
    data,
  ) => {
    try {
      await api.post('/users', data)

      toast.success('You have successfully subscribed to our newsletter!')

      reset()
    } catch (error) {
      console.log(error)
      toast.error('Error on subscribing to our newsletter, please try again.')
    }
  }

  const handleViewPopularCryptos = () => {
    if (numberOfResults === 4) {
      setNumberOfResults(10)
    } else {
      setNumberOfResults(4)
    }
  }

  useEffect(() => {
    if (popularCryptos.length === 0 || !exchangeRate) {
      toast.error('Error on loading data, please try again later.')
    }
  }, [exchangeRate, popularCryptos.length])

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
        <section className="pr-0 xl:pr-0">
          <div className="mx-auto flex max-w-2xl flex-col gap-2 text-center md:mx-0 md:gap-4 md:text-left xl:max-w-[36.875rem] xl:gap-6">
            <p className="text-xl font-bold leading-8 text-primary-500 md:text-3xl md:leading-10 xl:text-5xl xl:leading-10 xl:-tracking-px">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className="text-label max-w-md leading-6 text-color-base md:max-w-none md:text-base xl:text-xl xl:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>
          <div className="mt-6 w-full xl:mt-8">
            <Button.Root
              variant="primary"
              className="mx-auto h-8 max-w-[11.25rem] md:mx-0 md:h-12 md:max-w-[14.5rem] xl:max-w-[17.375rem]"
            >
              <Button.Content className="text-sm font-normal uppercase leading-4 md:font-bold">
                Sign Up Now
              </Button.Content>
              <Button.Icon icon={ArrowRight} />
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
        <div>{isAbove768 && <HomePageImagesCarousel />}</div>
      </main>

      <div className="h-[15.4375rem] w-full bg-home-wave-one bg-cover bg-top bg-no-repeat" />

      <section className="bg-home-section-two pt-14 font-base md:space-y-10 md:px-12 md:py-20 xl:flex xl:flex-row-reverse xl:items-center xl:justify-between xl:pb-[8.125rem] xl:pl-28 xl:pt-[7.5rem]">
        <div className="px-6 md:mx-auto md:mb-4 md:max-w-[30.875rem] md:px-0 xl:mx-0 xl:mb-0 xl:ml-8 xl:mr-28 xl:max-w-[25.5rem]">
          <Highlight.Root>
            <Highlight.SubHeading
              as="h5"
              text="Lorem ipsum"
              className="mb-1 text-md xl:text-xl xl:leading-7"
            />
            <Highlight.Heading
              as="h4"
              text="Lorem ipsum"
              className="mb-4 text-2xl leading-7 md:text-3xl md:leading-8 xl:text-4xl xl:leading-9 xl:-tracking-tight"
            />
            <Highlight.Description
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
              className="md:text-md md:leading-6"
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
        <h3 className="text-center text-xl font-bold leading-8 text-color-base md:text-2xl xl:text-3xl xl:leading-8">
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
          {numberOfResults === 4 && <Button.Icon icon={Plus} />}
        </Button.Root>
      </section>

      <section className="relative z-0 flex min-h-[432px] flex-col items-center justify-between gap-10 bg-home-footer bg-cover bg-no-repeat px-6 py-14 font-base before:absolute before:inset-0 before:-z-10 before:h-full before:bg-home-wave-two before:bg-cover before:bg-right before:bg-no-repeat md:min-h-[412px] md:flex-row md:gap-8 md:px-12 md:py-0 xl:px-[13.5rem]">
        <div className="w-full max-w-[24.0625rem]">
          <Highlight.Root>
            <Highlight.SubHeading
              text="Lorem ipsum"
              as="h4"
              className="mb-1 text-primary-200 md:text-xl xl:text-2xl xl:leading-8"
            />
            <Highlight.Heading
              text="Lorem ipsum"
              as="h3"
              className="mb-4 text-2xl leading-8 text-white md:text-3xl md:leading-10 xl:text-4xl xl:leading-9"
            />
            <Highlight.Description
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
              as="p"
              className="text-base text-white"
            />
          </Highlight.Root>
        </div>

        <div className="w-full max-w-sm space-y-5">
          <Form.Control
            onSubmit={handleSubmit(onSubmitSubscribeForm)}
            className="gap-4"
          >
            <div className="space-y-2">
              <Input.Label>Email</Input.Label>
              <Controller
                name="email"
                defaultValue={''}
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <Input.Root
                    name={name}
                    type="email"
                    placeholder="Email"
                    onChange={onChange}
                    value={value}
                    className="h-10 md:h-auto"
                    isInvalid={!!errors.email}
                  />
                )}
              />
            </div>

            {errors.email && (
              <Form.ErrorMessage>{errors.email.message}</Form.ErrorMessage>
            )}

            <Button.Root
              type="submit"
              variant="primary"
              className="h-10 shadow-button-shadow md:h-12"
              isLoading={isSubmitting}
            >
              <Button.Content>Subscribe</Button.Content>
            </Button.Root>
          </Form.Control>
        </div>
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

  const responses = await Promise.allSettled(promises)

  const coingeckoResponse =
    responses[0].status === 'fulfilled' ? responses[0].value.data : []
  const exchangerateResponse =
    responses[1].status === 'fulfilled' ? responses[1].value.data : {}

  return {
    props: {
      popularCryptos: coingeckoResponse,
      exchangeRate: exchangerateResponse,
    },
  }
}
