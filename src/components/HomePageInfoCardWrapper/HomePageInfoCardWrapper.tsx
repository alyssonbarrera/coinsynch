import { HomeCard } from '@/components/HomeCard'

import chartIcon from '@/assets/icons/chart-icon.svg'
import cryptoIcon from '@/assets/icons/crypto-icon.svg'
import bitconIcon from '@/assets/icons/bitcoin-icon.svg'
import devicesIcon from '@/assets/icons/devices-icon.svg'

export function HomePageInfoCardWrapper() {
  return (
    <div
      data-testid="HomePageInfoCardWrapper"
      className="mx-auto w-full max-w-[45rem] space-y-6 xl:mx-0 xl:max-w-[43.5rem] xl:space-y-8"
    >
      <div className="flex justify-start gap-6 xl:gap-8">
        <HomeCard.Root>
          <HomeCard.Icon src={bitconIcon} alt="bitcoin icon" />
          <HomeCard.Content
            subheading="For your company"
            heading="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </HomeCard.Root>
        <HomeCard.Root>
          <HomeCard.Icon src={cryptoIcon} alt="bitcoin icon" />
          <HomeCard.Content
            subheading="For your company"
            heading="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </HomeCard.Root>
      </div>
      <div className="flex justify-end gap-6 xl:gap-8">
        <HomeCard.Root>
          <HomeCard.Icon src={chartIcon} alt="bitcoin icon" />
          <HomeCard.Content
            subheading="For your company"
            heading="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </HomeCard.Root>
        <HomeCard.Root>
          <HomeCard.Icon src={devicesIcon} alt="bitcoin icon" />
          <HomeCard.Content
            subheading="For your company"
            heading="Crypto Solutions"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, "
          />
        </HomeCard.Root>
      </div>
    </div>
  )
}
