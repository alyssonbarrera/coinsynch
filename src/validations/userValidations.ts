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
  .min(8, errorMessages.passwordMin)
  .max(16, errorMessages.passwordMax)

const passwordConfirmation = z
  .string()
  .min(8, errorMessages.passwordMin)
  .max(16, errorMessages.passwordMax)

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
