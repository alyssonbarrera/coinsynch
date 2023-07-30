/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import elephantImage from '@/assets/images/elephant.webp'

export function NewsCard() {
  return (
    <div className="flex h-full min-h-[142px] w-full flex-col rounded-lg bg-white shadow-dashboard-card sm:max-h-[112px] sm:min-h-[112px] sm:w-full sm:max-w-none sm:flex-row">
      <div className="p-2 sm:w-full sm:px-4 sm:pb-[18px] sm:pt-[0.9375rem]">
        <h6 className="mb-1 text-sm font-bold leading-5 text-color-base">
          NFT's NEWS
        </h6>
        <p className="text-xs leading-4 text-secondary-500 sm:mb-4">
          New ElephantX NFT to be lauched!
        </p>
        <a className="hidden cursor-pointer text-xs leading-4 text-primary-400 sm:inline">
          Read more +
        </a>
      </div>
      <div className="h-full">
        <Image
          src={elephantImage}
          alt="Elephant"
          width={143}
          height={112}
          className="aspect-video h-full w-full rounded-b-lg object-cover object-center sm:aspect-square sm:h-full sm:w-full sm:rounded-r-lg sm:rounded-bl-none"
        />
      </div>
    </div>
  )
}
