export function formatCurrentPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatPriceChange(value: number) {
  return value.toFixed(3).toString().replace('.', ',')
}

export function formatCurrencyPriceWithSpace(value: number) {
  const formattedPrice = value
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    .replace('$', 'US$ ')

  return formattedPrice.replace(/[.,]/g, (match) => (match === '.' ? ',' : '.'))
}

export function formatPercentage(value: number) {
  return value.toFixed(2).toString().replace('.', ',')
}
