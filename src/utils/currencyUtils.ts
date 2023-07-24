export function formatCurrentPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function formatPriceChange(value: number) {
  return value.toFixed(3).toString().replace('.', ',')
}
