import { screen, render } from '@testing-library/react'
import { HomeNavbar } from './HomeNavbar'

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

describe('HomeNavbar Component', () => {
  it('should render the navbar', () => {
    render(
      <HomeNavbar
        data-testid="HomeNavbar"
        popularCryptosData={mockPopularCryptosData}
        exchangeRateData={mockExchangeRateData}
      />,
    )

    expect(screen.getByTestId('HomeNavbar')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Top Cryptos')).toBeInTheDocument()
  })

  it('should render the navbar with the correct data', () => {
    render(
      <HomeNavbar
        data-testid="HomeNavbar"
        popularCryptosData={mockPopularCryptosData}
        exchangeRateData={mockExchangeRateData}
      />,
    )

    const popularCryptosContainer = screen.getByTestId('PopularCryptos')

    expect(popularCryptosContainer).toBeInTheDocument()
    expect(popularCryptosContainer.children).toHaveLength(2)
    expect(popularCryptosContainer.firstChild).toHaveTextContent('btc')
    expect(popularCryptosContainer.firstChild).toHaveTextContent('R$ 5,00')
    expect(popularCryptosContainer.firstChild).toHaveTextContent('+1,000')
  })
})
