import Image from 'next/image'
import classNames from 'classnames'
import {
  formatCurrencyPriceToUSDWithSpace,
  formatPercentage,
} from '@/utils/currencyUtils'

import { Table } from '@/components/Table'
import { Trade } from '@/components/Icons/Trade'

import { WalletDTO } from '@/dtos/WalletDTO'

type DashboardWalletTableProps = {
  wallet: WalletDTO[]
}

export function DashboardWalletTable({ wallet }: DashboardWalletTableProps) {
  return (
    <Table.Root>
      <Table.Head>
        <Table.Row className="text-sm leading-5">
          <Table.Cell>#</Table.Cell>
          <Table.Cell>Crypto</Table.Cell>
          <Table.Cell>Holdings</Table.Cell>
          <Table.Cell>Change</Table.Cell>
          <Table.Cell>Trade</Table.Cell>
        </Table.Row>
      </Table.Head>

      <Table.Body>
        {wallet.map((crypto, index) => (
          <Table.Row
            key={crypto.id}
            className={classNames(
              (index + 1) % 2 === 0 && 'w-full bg-secondary-100',
            )}
          >
            <Table.Cell className="text-sm leading-5">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </Table.Cell>
            <Table.Cell>
              <div className="flex items-center gap-4">
                <Image
                  src={crypto.coin.image}
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
            <Table.Cell className="spacep-y-1">
              <p className="text-sm leading-5 text-color-base">
                {formatCurrencyPriceToUSDWithSpace(crypto.coin.current_price)}
              </p>
              <span className="text-xs uppercase leading-4 text-primary-500">
                {crypto.holding} {crypto.symbol}
              </span>
            </Table.Cell>
            <Table.Cell
              className={classNames(
                'pr-16 text-base',
                crypto.coin.price_change_percentage_24h > 0
                  ? 'text-tertiary-700'
                  : 'text-quaternary-700',
              )}
            >
              {crypto.coin.price_change_percentage_24h > 0 ? '+' : ''}
              {''}
              {formatPercentage(crypto.coin.price_change_percentage_24h)}%
            </Table.Cell>
            <Table.Cell>
              <Table.Button
                buttonType={'transparent'}
                className="w-max hover:bg-transparent"
                aria-label={`Trade ${crypto.name}`}
              >
                <Trade />
              </Table.Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
