import { toast } from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { X } from '@/components/Icons/X'
import { Form } from '@/components/Form'
import { Modal } from '@/components/Modal'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'

import { useAuth } from '@/hooks/useAuth'
import { useModal } from '@/hooks/useModal'

import { api } from '@/services/api.client'
import { useWalletStore } from '@/store/walletStore'
import { userValidations } from '@/validations/userValidations'

import { CoinDTO } from '@/dtos/CoinDTO'
import { UserDTO } from '@/dtos/UserDTO'
import { WalletDTO } from '@/dtos/WalletDTO'

import {
  CreateUpdatedCryptoObjectDTO,
  BuyCryptoFormSchema,
  CreateCryptoBySelectedCryptoDTO,
  CreateCryptoDTO,
  GenerateCryptoPayloadDTO,
  PerformApiRequestDTO,
  PerformCryptoMethodBasedOnActionDTO,
} from './types'

const buyCryptoFormSchema = userValidations.schemas.buyCrypto

type AddCryptoModalProps = {
  cryptos: CoinDTO[]
}

export function AddCryptoModal({ cryptos }: AddCryptoModalProps) {
  const auth = useAuth()
  const user = auth.user as UserDTO

  const { onClose } = useModal()
  const { addCrypto, getCrypto, updateCrypto } = useWalletStore()

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BuyCryptoFormSchema>({
    resolver: zodResolver(buyCryptoFormSchema),
  })

  const handleCloseAddCryptoModal = () => {
    onClose('add-crypto')
  }

  const performApiRequest = async ({
    action,
    user,
    crypto,
    api,
  }: PerformApiRequestDTO) => {
    const basePath = `/users/${user.id}/wallet`

    const endpoint = {
      create: basePath,
      update: `${basePath}/${crypto.id}`,
    }[action]

    const payload = {
      create: crypto,
      update: { holding: crypto.holding },
    }[action]

    const apiMethod = {
      create: api.post,
      update: api.put,
    }[action]

    const { data: apiResponse } = await apiMethod(endpoint, payload)

    return {
      apiResponse,
    }
  }

  const createUpdatedCryptoObject = ({
    crypto,
    apiResponse,
    action,
  }: CreateUpdatedCryptoObjectDTO) => {
    const updatedCrypto = {
      create: {
        ...apiResponse,
        coin: cryptos.find((c) => c.id === apiResponse.crypto_id),
      },
      update: {
        ...crypto,
        holding: apiResponse.holding,
      },
    }[action] as WalletDTO

    return {
      updatedCrypto,
    }
  }

  const performCryptoMethodBasedOnAction = ({
    action,
    updatedCrypto,
  }: PerformCryptoMethodBasedOnActionDTO) => {
    if (action === 'create') {
      addCrypto(updatedCrypto)
    } else {
      updateCrypto(updatedCrypto)
    }
  }

  const coordinateCryptoAction = async (
    action: 'create' | 'update',
    crypto: CreateCryptoDTO | WalletDTO,
  ) => {
    try {
      const { apiResponse } = await performApiRequest({
        action,
        user,
        crypto,
        api,
      })

      const { updatedCrypto } = createUpdatedCryptoObject({
        crypto,
        apiResponse,
        action,
      })

      return performCryptoMethodBasedOnAction({
        action,
        updatedCrypto,
      })
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const generateCryptoPayload = ({
    crypto,
    cryptoFound,
  }: GenerateCryptoPayloadDTO) => {
    const newCrypto = {
      crypto_id: crypto.selectedCrypto,
      holding: Number(crypto.cryptoQuantity),
      symbol: cryptoFound?.symbol ?? null,
      name: cryptoFound?.name ?? null,
      id: cryptoFound?.id ?? '',
    }

    return newCrypto
  }

  const updateCryptoHoldingInWallet = async (
    crypto: WalletDTO,
    cryptoQuantity: number,
  ) => {
    const newHolding = crypto.holding + cryptoQuantity

    await coordinateCryptoAction('update', {
      ...crypto,
      holding: newHolding,
    })
  }

  const findCryptoByIdInCryptoList = (cryptoId: string) => {
    return cryptos.find((crypto) => crypto.id === cryptoId)
  }

  const createNewCryptoBySelectedCrypto = async ({
    cryptoQuantity,
    selectedCrypto,
    cryptoFound,
  }: CreateCryptoBySelectedCryptoDTO) => {
    const newCrypto = generateCryptoPayload({
      crypto: {
        cryptoQuantity,
        selectedCrypto,
      },
      cryptoFound,
    })

    await coordinateCryptoAction('create', newCrypto)
  }

  const successSubmitAddCryptoForm = () => {
    reset()
    handleCloseAddCryptoModal()
    toast.success('Crypto added successfully!')
  }

  const failedSubmitAddCryptoForm = (message: string) => {
    toast.error(message)
  }

  const onSubmitAddCryptoForm: SubmitHandler<BuyCryptoFormSchema> = async (
    data,
  ) => {
    try {
      const selectedCryptoId = data.selectedCrypto
      const selectedCrypto = getCrypto(selectedCryptoId)
      const cryptoAlreadyExists = !!selectedCrypto

      if (cryptoAlreadyExists) {
        const selectedCryptoQuantity = Number(data.cryptoQuantity)

        await updateCryptoHoldingInWallet(
          selectedCrypto,
          selectedCryptoQuantity,
        )
      } else {
        const cryptoFound = findCryptoByIdInCryptoList(selectedCryptoId)

        const newCryptoData = {
          ...data,
          cryptoFound,
        }

        await createNewCryptoBySelectedCrypto(newCryptoData)
      }

      successSubmitAddCryptoForm()
    } catch (error: any) {
      const errorMessage = error.message
      failedSubmitAddCryptoForm(errorMessage)
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
              name="selectedCrypto"
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

            {errors.selectedCrypto && (
              <Form.ErrorMessage className="mt-2">
                {errors.selectedCrypto.message}
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
