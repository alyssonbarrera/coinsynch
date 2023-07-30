import { Balance } from '../Icons/Balance'

export function BalanceCard() {
  return (
    <div className="flex h-12 w-full rounded-lg shadow-dashboard-card sm:h-28">
      <div className="flex w-full items-center gap-4 rounded-l-lg bg-white px-4 sm:p-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 md:h-12 md:w-12 xl:h-16 xl:w-16">
          <Balance />
        </div>
        <div className="flex flex-col">
          <h4 className="text-sm leading-5 text-color-base md:text-xl md:leading-7 xl:text-2xl xl:leading-7">
            Balance
          </h4>
          <span className="text-xs leading-4 text-secondary-500">in US$</span>
          <p className="hidden text-secondary-500 sm:block md:text-sm md:leading-5 xl:text-base">
            (approximately)
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center rounded-r-lg bg-primary-100">
        <h3 className="text-base font-bold text-color-base sm:text-2xl sm:leading-7 xl:text-3xl xl:leading-8">
          $32,256.56
        </h3>
      </div>
    </div>
  )
}
