import { z } from 'zod'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { zodResolver } from '@hookform/resolvers/zod'
import { userValidations } from '@/validations/userValidations'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { X } from '@/components/Icons/X'
import { Form } from '@/components/Form'
import { Modal } from '@/components/Modal'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Mail } from '@/components/Icons/Mail'
import { Lock } from '@/components/Icons/Lock'

import { useAuth } from '@/hooks/useAuth'
import { useModal } from '@/hooks/useModal'

import { errorMessages } from '@/utils/errorMessages'
import { InvalidCredentialsError } from '@/services/errors/InvalidCredentialsError'

const signInFormSchema = userValidations.schemas.signIn

type SignInFormSchema = z.infer<typeof signInFormSchema>

export function SignInModal() {
  const router = useRouter()
  const { signIn } = useAuth()
  const { onOpen, onClose } = useModal()

  const handleOpenSignUpModal = () => {
    onOpen('signup')
  }

  const handleCloseSignUpModal = () => {
    onClose('signup')
  }

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  })

  const onSubmitSubscribeForm: SubmitHandler<SignInFormSchema> = async (
    data,
  ) => {
    try {
      await signIn(data)
      await router.push('/dashboard')

      reset()
      handleCloseSignUpModal()
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        toast.error(error.message)
      } else {
        toast.error(errorMessages.unexpectedError)
      }
    }
  }

  return (
    <Modal.Root
      name="signin"
      onOpenChange={() => {
        reset()
        clearErrors()
      }}
    >
      <Modal.Content>
        <Modal.CloseButton icon={X} />
        <Modal.Title className="mb-6 text-center text-xl leading-7 text-color-base xl:text-2xl xl:leading-8">
          Sign in to <span className="font-bold text-primary-500">Coin</span>
          <span className="font-bold text-secondary-500">Synch</span>
        </Modal.Title>
        <Form.Control
          className="md:gap-4"
          onSubmit={handleSubmit(onSubmitSubscribeForm)}
        >
          <Controller
            name="email"
            defaultValue={''}
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Input.Root
                name={name}
                type="email"
                autoComplete="email"
                disabled={isSubmitting}
                variant="secondary"
                icon={Mail}
                placeholder="Email"
                onChange={onChange}
                value={value}
                className="h-10 md:h-auto"
                isInvalid={!!errors.email}
              />
            )}
          />

          {errors.email && (
            <Form.ErrorMessage>{errors.email.message}</Form.ErrorMessage>
          )}

          <Controller
            name="password"
            defaultValue={''}
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Input.Root
                name={name}
                type="password"
                autoComplete="current-password"
                disabled={isSubmitting}
                placeholder="Password"
                variant="secondary"
                icon={Lock}
                onChange={onChange}
                value={value}
                className="h-10 md:h-auto"
                isInvalid={!!errors.password}
              />
            )}
          />

          <div className="flex items-center justify-between">
            {errors.password && (
              <Form.ErrorMessage className="w-full">
                {errors.password.message}
              </Form.ErrorMessage>
            )}
            <p className="-mt-2 w-full text-right text-xs leading-4 text-secondary-500">
              Forgot password?
            </p>
          </div>

          <Button.Root
            type="submit"
            variant="primary"
            className="h-10 shadow-button-shadow md:h-12"
            isLoading={isSubmitting}
          >
            <Button.Content>Sign in</Button.Content>
          </Button.Root>

          <div className="text-center text-xs leading-4 text-color-base xl:text-sm xl:leading-5">
            <span className="hidden md:inline">Don’t have an account?</span>{' '}
            <button
              className="font-bold"
              onClick={handleOpenSignUpModal}
              type="button"
              aria-label="Sign Up"
            >
              <span className="font-bold">Sign up to</span>{' '}
              <span className="font-bold text-primary-500">Coin</span>
              <span className="font-bold text-secondary-500">Synch</span>
            </button>
          </div>
        </Form.Control>
      </Modal.Content>
    </Modal.Root>
  )
}
