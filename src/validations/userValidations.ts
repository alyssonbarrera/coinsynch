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
  .min(8, errorMessages.passwordMin)
  .max(16, errorMessages.passwordMax)

const acceptTerms = z.boolean().refine((data) => data === true, {
  message: errorMessages.acceptTerms,
})

export const subscribeFormSchema = z.object({
  email,
})

const fields = {
  name,
  email,
  password,
  passwordConfirmation,
}

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

const schemas = {
  register: registerSchema,
  signIn: signInSchema,
  subscribe: subscribeSchema,
}

export const userValidations = {
  fields,
  schemas,
}
