import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Form } from '../Form'
import { Modal } from '../Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useModal } from '@/hooks/useModal'
import { toast } from 'react-hot-toast'
import { X } from '../Icons/X'
import { Button } from '../Button'

import { CoinDTO } from '@/dtos/CoinDTO'
import { useAuth } from '@/hooks/useAuth'
import { UserDTO } from '@/dtos/UserDTO'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { api } from '@/services/api.client'
import { useWalletStore } from '@/store/walletStore'
import { userValidations } from '@/validations/userValidations'

const buyCryptoFormSchema = userValidations.schemas.buyCrypto

type BuyCryptoFormSchema = z.infer<typeof buyCryptoFormSchema>

type AddCryptoModalProps = {
  cryptos: CoinDTO[]
}

export function AddCryptoModal({ cryptos }: AddCryptoModalProps) {
  const auth = useAuth()
  const user = auth.user as UserDTO

  const { onClose } = useModal()
  const { addCrypto, getCrypto, updateCrypto } = useWalletStore()

  const handleCloseAddCryptoModal = () => {
    onClose('add-crypto')
  }

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BuyCryptoFormSchema>({
    resolver: zodResolver(buyCryptoFormSchema),
  })

  const onSubmitAddCryptoForm: SubmitHandler<BuyCryptoFormSchema> = async (
    data,
  ) => {
    try {
      const cryptoAlreadyExists = getCrypto(data.cryptoSelect)

      if (cryptoAlreadyExists) {
        const { data: responseData } = await api.put(
          `/users/${user.id}/wallet/${cryptoAlreadyExists.id}`,
          {
            holding:
              Number(cryptoAlreadyExists.holding) + Number(data.cryptoQuantity),
          },
        )

        updateCrypto({
          ...cryptoAlreadyExists,
          holding: responseData.holding,
        })
      } else {
        const cryptoData = cryptos.find(
          (crypto) => crypto.id === data.cryptoSelect,
        )

        const newCrypto = {
          crypto_id: data.cryptoSelect,
          holding: Number(data.cryptoQuantity),
          symbol: cryptoData?.symbol,
          name: cryptoData?.name,
        }

        const { data: responseData } = await api.post(
          `/users/${user.id}/wallet`,
          newCrypto,
        )

        const crypto = {
          ...responseData,
          coin: cryptos.find((crypto) => crypto.id === responseData.crypto_id),
        }

        addCrypto(crypto)
      }

      reset()
      handleCloseAddCryptoModal()
      toast.success('Crypto added successfully!')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <Modal.Root
      name="add-crypto"
      onOpenChange={() => {
        reset()
        clearErrors()
      }}
    >
      <Modal.Content>
        <Modal.CloseButton icon={X} />
        <Modal.Title className="mb-6 text-center text-xl font-bold leading-7 text-color-base xl:text-2xl xl:leading-7">
          Add crypto
        </Modal.Title>
        <Form.Control
          className="md:gap-4"
          onSubmit={handleSubmit(onSubmitAddCryptoForm)}
        >
          <div className="relative">
            <Controller
              name="cryptoSelect"
              defaultValue={''}
              control={control}
              render={({ field: { onChange, name } }) => (
                <Select
                  data={cryptos}
                  name={name}
                  onSelectedItem={(item) => {
                    onChange(item.id)
                  }}
                />
              )}
            />

            {errors.cryptoSelect && (
              <Form.ErrorMessage className="mt-2">
                {errors.cryptoSelect.message}
              </Form.ErrorMessage>
            )}
          </div>

          <Controller
            name="cryptoQuantity"
            defaultValue={''}
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Input.Root
                type="number"
                min={0}
                variant="tertiary"
                name={name}
                placeholder="0,00"
                value={value}
                onChange={onChange}
              />
            )}
          />

          {errors.cryptoQuantity && (
            <Form.ErrorMessage>
              {errors.cryptoQuantity.message}
            </Form.ErrorMessage>
          )}

          <Button.Root
            type="submit"
            variant="primary"
            className="h-10 shadow-button-shadow md:h-12"
            isLoading={isSubmitting}
          >
            <Button.Content>Add Crypto</Button.Content>
          </Button.Root>
        </Form.Control>
      </Modal.Content>
    </Modal.Root>
  )
}
