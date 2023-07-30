import { CoinDTO } from './CoinDTO'

export type WalletDTO = {
  id: string
  name: string
  image: string
  symbol: string
  holding: number
  created_at: Date
  user_id: string
  crypto_id: string
  coin: CoinDTO
}
