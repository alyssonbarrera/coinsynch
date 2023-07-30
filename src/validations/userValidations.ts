import { z } from 'zod'
import { errorMessages } from '@/utils/errorMessages'

const name = z
  .string()
  .nonempty(errorMessages.nameRequired)
  .min(2, errorMessages.nameMin)

const email = z
  .string()
  .nonempty(errorMessages.emailRequired)
  .email(errorMessages.emailInvalid)

const password = z
  .string()
  .nonempty(errorMessages.passwordRequired)
  .min(8, errorMessages.passwordMin)
  .max(16, errorMessages.passwordMax)

const passwordConfirmation = z
  .string()
  .nonempty(errorMessages.confirmPasswordRequired)

const acceptTerms = z.boolean().refine((data) => data === true, {
  message: errorMessages.acceptTerms,
})

const cryptoSelect = z.string().nonempty(errorMessages.cryptoSelect)

const cryptoQuantity = z.string().nonempty(errorMessages.cryptoQuantity)

export const subscribeFormSchema = z.object({
  email,
})

const registerSchema = z
  .object({
    name,
    email,
    password,
    passwordConfirmation,
    acceptTerms,
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: errorMessages.passwordMatch,
    path: ['passwordConfirmation'],
  })

const signInSchema = z.object({
  email,
  password,
})

const subscribeSchema = z.object({
  email,
})

const buyCryptoSchema = z.object({
  cryptoSelect,
  cryptoQuantity,
})

const fields = {
  name,
  email,
  password,
  passwordConfirmation,
  acceptTerms,
  cryptoSelect,
  cryptoQuantity,
}

const schemas = {
  register: registerSchema,
  signIn: signInSchema,
  subscribe: subscribeSchema,
  buyCrypto: buyCryptoSchema,
}

export const userValidations = {
  fields,
  schemas,
}
