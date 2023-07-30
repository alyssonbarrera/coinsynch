import { WalletDTO } from '@/dtos/WalletDTO'
import { DashboardCryptoCard } from '@/components/DashboardCryptoCard'

type DashboardCryptoCardWrapperProps = {
  wallet: WalletDTO[]
}

export function DashboardCryptoCardWrapper({
  wallet,
}: DashboardCryptoCardWrapperProps) {
  return (
    <div className="flex flex-auto gap-4">
      {wallet.map((crypto) => (
        <DashboardCryptoCard.Root key={crypto.id}>
          <DashboardCryptoCard.Header
            image={crypto.coin.image}
            title={crypto.name}
            symbol={crypto.symbol}
          />
          <DashboardCryptoCard.Content
            price={crypto.coin.current_price}
            holding={crypto.holding}
            change={crypto.coin.price_change_percentage_24h}
            symbol={crypto.symbol}
          />
          <DashboardCryptoCard.Footer />
        </DashboardCryptoCard.Root>
      ))}
    </div>
  )
}
