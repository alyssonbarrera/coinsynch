import { twMerge } from 'tailwind-merge'

import { CoinDTO } from '@/dtos/CoinDTO'
import { ExchangeRateDTO } from '@/dtos/ExchangeRateDTO'

import { formatCurrentPrice, formatPriceChange } from '@/utils/currencyUtils'

import styles from './styles.module.css'

type PopularCryptosProps = {
  data: CoinDTO[]
  exchangeRateData: ExchangeRateDTO
}

export function PopularCryptos({
  data: popularCryptos,
  exchangeRateData,
}: PopularCryptosProps) {
  const exchangeRate = exchangeRateData?.rates?.BRL

  return (
    <div
      data-testid="PopularCryptos"
      className={`font-base uppercase ${styles.popularCryptosContainer} text-xs leading-sm md:text-xs md:leading-sm md:tracking-normal xl:text-sm xl:leading-4`}
    >
      <div className={styles.popularCryptosSlide}>
        {popularCryptos?.map((crypto) => (
          <div key={crypto.id} className={styles.popularCryptosSlideItem}>
            <p className="text-secondary-800">{crypto.symbol}</p>
            <p className="text-color-base">
              {formatCurrentPrice(crypto.current_price * exchangeRate)}
            </p>
            <p
              className={twMerge(
                'text-color-base',
                crypto.price_change_24h < 0
                  ? 'text-quaternary-700'
                  : 'text-tertiary-700',
              )}
            >
              {crypto.price_change_percentage_24h > 0 && '+'}
              {formatPriceChange(crypto.price_change_percentage_24h)}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.popularCryptosSlide}>
        {popularCryptos?.map((crypto) => (
          <div key={crypto.id} className={styles.popularCryptosSlideItem}>
            <p className="text-secondary-800">{crypto.symbol}</p>
            <p className="text-color-base">
              {formatCurrentPrice(crypto.current_price * exchangeRate)}
            </p>
            <p
              className={twMerge(
                'text-color-base',
                crypto.price_change_24h < 0
                  ? 'text-quaternary-700'
                  : 'text-tertiary-700',
              )}
            >
              {crypto.price_change_percentage_24h > 0 && '+'}
              {formatPriceChange(crypto.price_change_percentage_24h)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
