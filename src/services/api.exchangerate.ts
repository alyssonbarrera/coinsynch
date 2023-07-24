import axios from 'axios'

export const exchangerate = axios.create({
  baseURL: 'https://api.exchangerate-api.com/v4/',
})
