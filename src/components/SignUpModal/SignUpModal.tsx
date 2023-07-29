import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { userValidations } from '@/validations/userValidations'

import { X } from '@/components/Icons/X'
import { Form } from '@/components/Form'
import { Modal } from '@/components/Modal'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Mail } from '@/components/Icons/Mail'
import { Lock } from '@/components/Icons/Lock'
import { User } from '@/components/Icons/User'

import { useAuth } from '@/hooks/useAuth'

type SignUpModalProps = {
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

const signUpFormSchema = userValidations.schemas.register

type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export function SignUpModal({ isModalOpen, setIsModalOpen }: SignUpModalProps) {
  const { signUp } = useAuth()

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  })

  const onSubmitSubscribeForm: SubmitHandler<SignUpFormSchema> = async (
    data,
  ) => {
    try {
      await signUp(data)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal.Root
      open={isModalOpen}
      onOpenChange={(isOpen) => {
        setIsModalOpen(isOpen)
        clearErrors()
      }}
    >
      <Modal.Content>
        <Modal.CloseButton icon={X} />
        <Modal.Title className="mb-6 text-center text-2xl leading-8 text-color-base">
          Sign up to <span className="font-bold text-primary-500">Coin</span>
          <span className="font-bold text-secondary-500">Synch</span>
        </Modal.Title>
        <Form.Control
          className="md:gap-4"
          onSubmit={handleSubmit(onSubmitSubscribeForm)}
        >
          <Controller
            name="name"
            defaultValue={''}
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Input.Root
                name={name}
                type="text"
                autoComplete="name"
                disabled={isSubmitting}
                variant="secondary"
                icon={User}
                placeholder="Name"
                onChange={onChange}
                value={value}
                className="h-10 md:h-auto"
                isInvalid={!!errors.name}
              />
            )}
          />

          {errors.name && (
            <Form.ErrorMessage>{errors.name.message}</Form.ErrorMessage>
          )}

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

          {errors.password && (
            <Form.ErrorMessage>{errors.password.message}</Form.ErrorMessage>
          )}

          <Controller
            name="passwordConfirmation"
            defaultValue={''}
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <Input.Root
                name={name}
                type="password"
                autoComplete="new-password"
                disabled={isSubmitting}
                placeholder="Confirm password"
                variant="secondary"
                icon={Lock}
                onChange={onChange}
                value={value}
                className="h-10 md:h-auto"
                isInvalid={!!errors.passwordConfirmation}
              />
            )}
          />

          {errors.passwordConfirmation && (
            <Form.ErrorMessage>
              {errors.passwordConfirmation.message}
            </Form.ErrorMessage>
          )}

          <div className="flex gap-4">
            <Controller
              name="acceptTerms"
              defaultValue={false}
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <input
                  name={name}
                  type="checkbox"
                  disabled={isSubmitting}
                  onChange={onChange}
                  checked={value}
                  className="input--checkbox h-4 w-4"
                />
              )}
            />

            <p className="text-sm leading-5 text-color-base">
              I have read and accept the{' '}
              <span className="font-bold">Privacy Policy</span>{' '}
              <span className="font-bold">Terms of User Sign</span>{' '}
            </p>
          </div>

          {errors.acceptTerms && (
            <Form.ErrorMessage>{errors.acceptTerms.message}</Form.ErrorMessage>
          )}

          <Button.Root
            type="submit"
            variant="primary"
            className="h-10 shadow-button-shadow md:h-12"
            isLoading={isSubmitting}
          >
            <Button.Content>Sign up</Button.Content>
          </Button.Root>

          <p className="text-center text-sm leading-5 text-color-base">
            Already have and account?{' '}
            <span className="font-bold">Sign in to</span>{' '}
            <span className="font-bold text-primary-500">Coin</span>
            <span className="font-bold text-secondary-500">Synch</span>
          </p>
        </Form.Control>
      </Modal.Content>
    </Modal.Root>
  )
}
