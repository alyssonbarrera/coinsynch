import { CoinDTO } from '@/dtos/CoinDTO'
import { Accordion } from '@/components/Accordion'

type HomePageTopCryptosAccordionProps = {
  popularCryptos: CoinDTO[]
}

export function HomePageTopCryptosAccordion({
  popularCryptos,
}: HomePageTopCryptosAccordionProps) {
  return (
    <Accordion.Root>
      {popularCryptos.map((crypto, index) => (
        <Accordion.Item key={crypto.id} value={crypto.id}>
          <Accordion.Title
            index={index + 1}
            image={crypto.image}
            title={crypto.name}
            acronym={crypto.symbol}
          />
          <Accordion.Content
            price={crypto.current_price}
            change={crypto.price_change_percentage_24h}
          />
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
