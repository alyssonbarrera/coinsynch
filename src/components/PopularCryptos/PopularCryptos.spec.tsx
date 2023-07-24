import { screen, render } from '@testing-library/react'
import { PopularCryptos } from './PopularCryptos'

const mockPopularCryptosData = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 1,
    market_cap: 1,
    market_cap_rank: 1,
    fully_diluted_valuation: 1,
    total_volume: 1,
    high_24h: 1,
    low_24h: 1,
    price_change_24h: 1,
    price_change_percentage_24h: 1,
    market_cap_change_24h: 1,
    market_cap_change_percentage_24h: 1,
    circulating_supply: 1,
    total_supply: 1,
    max_supply: 1,
    ath: 1,
    ath_change_percentage: 1,
    ath_date: '2021-01-01T00:00:00.000Z',
    atl: 1,
    atl_change_percentage: 1,
    atl_date: '2021-01-01T00:00:00.000Z',
    roi: null,
    last_updated: '2021-01-01T00:00:00.000Z',
  },
]

const mockExchangeRateData = {
  provider: 'exchange_rates_api',
  WARNING_UPGRADE_TO_V6: 'https://www.exchangerate-api.com/docs/upgrade-to-v6',
  terms: 'https://www.exchangerate-api.com/terms',
  base: 'USD',
  date: '2021-01-01',
  time_last_updated: 1619817601,
  rates: {
    USD: 1,
    BRL: 5,
  },
}

describe('PopularCryptos Component', () => {
  it('should render the popular cryptos', () => {
    render(
      <PopularCryptos
        data-testid="PopularCryptos"
        data={mockPopularCryptosData}
        exchangeRateData={mockExchangeRateData}
      />,
    )

    expect(screen.getByTestId('PopularCryptos')).toBeInTheDocument()

    expect(screen.getAllByText('btc')).toHaveLength(2)
    expect(screen.getAllByText('R$ 5,00')).toHaveLength(2)
    expect(screen.getAllByText('+1,000')).toHaveLength(2)
  })
})
