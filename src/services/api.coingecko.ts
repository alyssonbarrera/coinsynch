import axios from 'axios'

export const coingecko = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
})
