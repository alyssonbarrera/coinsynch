import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import { HomeCard } from '@/components/HomeCard'

import chartIcon from '@/assets/icons/chart-icon.svg'
import cryptoIcon from '@/assets/icons/crypto-icon.svg'
import bitconIcon from '@/assets/icons/bitcoin-icon.svg'
import devicesIcon from '@/assets/icons/devices-icon.svg'

import 'swiper/css/free-mode'

export function HomePageInfoCardsCarousel() {
  return (
    <div>
      <Swiper
        grabCursor
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={16}
        className="w-full px-6 pb-14 pt-6"
      >
        <SwiperSlide className="relative w-max">
          <HomeCard.Root>
            <HomeCard.Icon src={bitconIcon} alt="bitcoin icon" />
            <HomeCard.Content
              subheading="For your company"
              heading="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            />
          </HomeCard.Root>
        </SwiperSlide>
        <SwiperSlide className="relative w-max">
          <HomeCard.Root>
            <HomeCard.Icon src={cryptoIcon} alt="bitcoin icon" />
            <HomeCard.Content
              subheading="For your company"
              heading="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            />
          </HomeCard.Root>
        </SwiperSlide>
        <SwiperSlide className="relative w-max">
          <HomeCard.Root>
            <HomeCard.Icon src={chartIcon} alt="bitcoin icon" />
            <HomeCard.Content
              subheading="For your company"
              heading="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            />
          </HomeCard.Root>
        </SwiperSlide>
        <SwiperSlide className="relative w-max">
          <HomeCard.Root>
            <HomeCard.Icon src={devicesIcon} alt="bitcoin icon" />
            <HomeCard.Content
              subheading="For your company"
              heading="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
            />
          </HomeCard.Root>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
