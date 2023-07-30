const currencyFormatterToBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

const currencyFormatterToUSD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export function formatCurrentPrice(value: number, exchangeRate: number) {
  const price = value * exchangeRate

  if (!exchangeRate || exchangeRate === 1) {
    return formatCurrencyPriceToUSDWithSpace(price)
  }

  return currencyFormatterToBRL.format(price)
}

export function formatPriceChange(value: number) {
  return value.toFixed(3).toString().replace('.', ',')
}

export function formatCurrencyPriceToUSDWithSpace(value: number) {
  const formattedPrice = currencyFormatterToUSD
    .format(value)
    .replace('$', 'US$ ')
  return formattedPrice.replace(/[.,]/g, (match) => (match === '.' ? ',' : '.'))
}

export function formatCurrencyPriceToUSD(value: number) {
  const formattedPrice = currencyFormatterToUSD.format(value)

  return formattedPrice
}

export function formatPercentage(value: number) {
  return value.toFixed(2).toString().replace('.', ',')
}
