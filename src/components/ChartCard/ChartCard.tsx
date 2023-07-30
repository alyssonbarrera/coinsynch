import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

import { CoinDTO } from '@/dtos/CoinDTO'
import bitcoinIcon from '@/assets/icons/bitcoin-icon.svg'
import { formatPercentage } from '@/utils/currencyUtils'
import classNames from 'classnames'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

type ChartSeries = {
  name: string
  data: Array<number[]>
}

type ChartCardProps = {
  chartSeries: ChartSeries[]
  crypto: CoinDTO
}

export function ChartCard({ chartSeries, crypto }: ChartCardProps) {
  const chartOptions: ApexOptions = {
    chart: {
      offsetY: 30,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    stroke: {
      show: false,
    },
    fill: {
      opacity: 0.5,
      type: 'gradient',
      colors: ['#F4CC8F'],
      gradient: {
        shade: 'light',
        opacityFrom: 1,
        opacityTo: 0.2,
      },
    },
    responsive: [
      {
        breakpoint: 648,
        options: {
          chart: {
            offsetY: 20,
            height: '70%',
          },
        },
      },
    ],
  }

  return (
    <div className="shadow-balance-card flex h-full min-h-[142px] w-full flex-col justify-between rounded-lg bg-white shadow-dashboard-card sm:max-h-[112px] sm:min-h-[112px] sm:max-w-none sm:flex-row">
      <div className="w-full p-2 sm:min-w-[5.8125rem] sm:max-w-[5.8125rem]">
        <p className="mb-2 text-xs leading-4 text-secondary-500 sm:mb-4">
          Daily Variation
        </p>
        <div className="flex items-center gap-4 sm:block">
          <div className="flex items-center gap-2 sm:mb-2">
            <Image
              src={bitcoinIcon}
              alt="Bitcoin"
              width={24}
              height={24}
              className="h-4 w-4 sm:h-6 sm:w-6"
            />
            <p className="text-xs leading-4 text-color-base sm:text-sm sm:leading-5">
              {crypto?.symbol.toUpperCase()}
            </p>
          </div>
          <span
            className={classNames(
              'text-sm leading-5 sm:text-base',
              crypto?.price_change_percentage_24h > 0
                ? 'text-tertiary-700'
                : 'text-quaternary-700',
            )}
          >
            {crypto?.price_change_percentage_24h &&
              formatPercentage(crypto.price_change_percentage_24h)}
            %
          </span>
        </div>
      </div>
      <div className="w-full bg-chart-grid sm:h-max">
        <Chart
          width={'100%'}
          height={112}
          options={chartOptions}
          series={chartSeries}
          type="area"
        />
      </div>
    </div>
  )
}
