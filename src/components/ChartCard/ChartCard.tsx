import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

import bitcoinIcon from '@/assets/icons/bitcoin-icon.svg'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

type ChartSeries = {
  name: string
  data: number[]
}

type ChartCardProps = {
  chartSeries: ChartSeries[]
}

export function ChartCard({ chartSeries }: ChartCardProps) {
  const chartOptions: ApexOptions = {
    chart: {
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
            offsetY: 10,
            height: '60%',
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
              ETH
            </p>
          </div>
          <span className="text-sm leading-5 text-tertiary-700 sm:text-base">
            +5,65%
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
