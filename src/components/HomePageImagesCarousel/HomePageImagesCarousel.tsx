import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'

import { IconTag } from '@/components/IconTag'

import manImage from '@/assets/images/man-image.png'
import chartIcon from '@/assets/icons/chart-icon.svg'
import cryptoIcon from '@/assets/icons/crypto-icon.svg'
import bitcoinIcon from '@/assets/icons/bitcoin-icon.svg'
import womanImage from '@/assets/images/woman-image.png'
import devicesIcon from '@/assets/icons/devices-icon.svg'
import womanPbImage from '@/assets/images/woman-pb-image.png'

import 'swiper/css/free-mode'

export function HomePageImagesCarousel() {
  return (
    <Swiper
      modules={[FreeMode, Mousewheel]}
      mousewheel={true}
      freeMode={true}
      slidesPerView="auto"
      direction="horizontal"
      centeredSlides={true}
      className="home__swiper-container mx-0 hidden md:block md:w-[25.5rem] md:justify-end xl:w-[48rem]"
      breakpoints={{
        768: {
          spaceBetween: 50,
        },
        1024: {
          spaceBetween: 100,
        },
      }}
      lazyPreloadPrevNext={3}
    >
      <SwiperSlide className="relative w-max">
        <div className="before:absolute before:bottom-0 before:right-0 before:-z-10 before:bg-primary-500 before:md:h-[14.6rem] before:md:w-[9.375rem] before:xl:h-[26.25rem] before:xl:w-[16.8125rem]">
          <Image
            src={womanImage.src}
            alt="woman image"
            width={384}
            height={499}
            className="md:h-[280px] md:w-[215px] xl:h-[499px] xl:w-[384px]"
            loading="lazy"
          />
          <IconTag.Root className="absolute md:-left-5 md:top-12 md:h-11 md:w-11 xl:-left-10 xl:top-20 xl:h-20 xl:w-20">
            <IconTag.Content src={bitcoinIcon} alt="bitcoin icon" />
          </IconTag.Root>
          <IconTag.Root className="absolute md:-right-5 md:bottom-14 md:h-11 md:w-11 xl:-right-10 xl:bottom-24 xl:h-20 xl:w-20">
            <IconTag.Content src={chartIcon} alt="bitcoin icon" />
          </IconTag.Root>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-max">
        <div className="before:absolute before:bottom-0 before:right-1/2 before:-z-10 before:h-full before:translate-x-1/2 before:transform before:bg-primary-500 before:md:w-[8.375rem] before:xl:w-[15rem]">
          <Image
            src={manImage}
            alt="man image"
            width={384}
            height={499}
            className="md:h-[280px] md:w-[215px] xl:h-[499px] xl:w-[384px]"
            loading="lazy"
          />
          <IconTag.Root className="absolute md:-left-4 md:top-20 md:h-11 md:w-11 xl:-left-10 xl:top-36 xl:h-20 xl:w-20">
            <IconTag.Content src={devicesIcon} alt="bitcoin icon" />
          </IconTag.Root>
          <IconTag.Root className="absolute md:-right-5 md:top-4 md:h-11 md:w-11 xl:-right-10 xl:top-8 xl:h-20 xl:w-20">
            <IconTag.Content src={cryptoIcon} alt="bitcoin icon" />
          </IconTag.Root>
        </div>
      </SwiperSlide>
      <SwiperSlide className="w-max">
        <div className="before:absolute before:bottom-0 before:right-0 before:-z-10 before:bg-primary-500 before:md:h-[16.875rem] before:md:w-[6.25rem] before:xl:h-[30.0625rem] before:xl:w-[11.1875rem]">
          <Image
            src={womanPbImage}
            alt="man image"
            width={384}
            height={499}
            className="md:h-[280px] md:w-[215px] xl:h-[499px] xl:w-[384px]"
            loading="lazy"
          />
          <IconTag.Root className="absolute md:-left-5 md:bottom-11 md:h-11 md:w-11 xl:-left-10 xl:bottom-20 xl:h-20 xl:w-20">
            <IconTag.Content src={bitcoinIcon} alt="bitcoin icon" />
          </IconTag.Root>
          <IconTag.Root className="absolute md:-right-5 md:bottom-24 md:h-11 md:w-11 xl:-right-10 xl:bottom-[11.4375rem] xl:h-20 xl:w-20">
            <IconTag.Content src={chartIcon} alt="bitcoin icon" />
          </IconTag.Root>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
