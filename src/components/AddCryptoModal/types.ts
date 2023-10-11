import { CoinDTO } from '@/dtos/CoinDTO'
import { UserDTO } from '@/dtos/UserDTO'
import { WalletDTO } from '@/dtos/WalletDTO'
import { userValidations } from '@/validations/userValidations'
import { AxiosInstance } from 'axios'
import { z } from 'zod'

const buyCryptoFormSchema = userValidations.schemas.buyCrypto

export type BuyCryptoFormSchema = z.infer<typeof buyCryptoFormSchema>

export type CreateCryptoBySelectedCryptoDTO = BuyCryptoFormSchema & {
  cryptoFound: CoinDTO | undefined
}

export type GenerateCryptoPayloadDTO = {
  crypto: BuyCryptoFormSchema
  cryptoFound: CoinDTO | undefined
}

export type CreateCryptoDTO = {
  id: string
  crypto_id: string
  holding: number
  symbol: string | null
  name: string | null
}

export type CreateUpdatedCryptoObjectDTO = {
  crypto: CreateCryptoDTO | WalletDTO
  apiResponse: WalletDTO
  action: 'create' | 'update'
}

export type PerformApiRequestDTO = {
  action: 'create' | 'update'
  user: UserDTO
  crypto: CreateCryptoDTO | WalletDTO
  api: AxiosInstance
}

export type PerformCryptoMethodBasedOnActionDTO = {
  action: 'create' | 'update'
  updatedCrypto: WalletDTO
}
