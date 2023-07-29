import Image from 'next/image'
import classNames from 'classnames'
import {
  formatCurrencyPriceToUSDWithSpace,
  formatPercentage,
} from '@/utils/currencyUtils'

import { Table } from '@/components/Table'
import { CoinDTO } from '@/dtos/CoinDTO'

type HomePageTopCryptosTableProps = {
  popularCryptos: CoinDTO[]
}

export function HomePageTopCryptosTable({
  popularCryptos,
}: HomePageTopCryptosTableProps) {
  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.Cell>#</Table.Cell>
          <Table.Cell>Crypto</Table.Cell>
          <Table.Cell>Price</Table.Cell>
          <Table.Cell>Change</Table.Cell>
          <Table.Cell>Trade</Table.Cell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {popularCryptos.map((crypto, index) => (
          <Table.Row
            key={crypto.id}
            className={classNames((index + 1) % 2 === 0 && 'bg-secondary-100')}
          >
            <Table.Cell>
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-4">
                <Image
                  src={crypto.image}
                  alt={`${crypto.name} icon`}
                  width={32}
                  height={32}
                />
                <div className="flex gap-1 text-xs leading-4 md:text-md md:leading-6">
                  <p className="capitalize text-color-base">{crypto.name}</p>
                  <span className="uppercase text-secondary-500">
                    {crypto.symbol}
                  </span>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell className="text-md leading-6 text-color-base">
              {formatCurrencyPriceToUSDWithSpace(crypto.current_price)}
            </Table.Cell>
            <Table.Cell
              className={classNames(
                'pr-16 text-md leading-6',
                crypto.price_change_percentage_24h > 0
                  ? 'text-tertiary-700'
                  : 'text-quaternary-700',
              )}
            >
              {crypto.price_change_percentage_24h > 0 ? '+' : ''}
              {''}
              {formatPercentage(crypto.price_change_percentage_24h)}%
            </Table.Cell>
            <Table.Cell>
              <Table.Button>Buy</Table.Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
