import { create } from 'zustand'
import { WalletDTO } from '@/dtos/WalletDTO'
import { Draft, produce, enableMapSet } from 'immer'

enableMapSet()

type WalletStore = {
  wallet: Map<string, WalletDTO>
  setWallet: (wallet: WalletDTO[]) => void
  addCrypto: (crypto: WalletDTO) => void
  removeCrypto: (crypto: WalletDTO) => void
  getCrypto: (cryptoId: string) => WalletDTO | undefined
  updateCrypto: (crypto: WalletDTO) => void
  fetchWallet: () => WalletDTO[]
}

export const useWalletStore = create<WalletStore>((set, get) => ({
  wallet: new Map<string, WalletDTO>(),
  setWallet: (wallet) => {
    set(() => ({
      wallet: new Map(wallet.map((crypto) => [crypto.crypto_id, crypto])),
    }))
  },
  addCrypto: (crypto) => {
    set(
      produce((state: Draft<WalletStore>) => {
        state.wallet.set(crypto.crypto_id, crypto)
      }),
    )
  },
  removeCrypto: (crypto) => {
    set(
      produce((state) => {
        state.wallet.delete(crypto.crypto_id)
      }),
    )
  },
  getCrypto: (cryptoId) => {
    return get().wallet.get(cryptoId)
  },
  updateCrypto: (crypto) => {
    set(
      produce((state) => {
        state.wallet.set(crypto.crypto_id, crypto)
      }),
    )
  },
  fetchWallet: () => {
    return Array.from(get().wallet.values())
  },
}))
