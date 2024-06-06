import { yup } from '@/lib/yup'

import { RequiredFieldSchema } from './Shared'

export const LoginSchema = yup.object().shape({
  email: RequiredFieldSchema.email(),
  password: RequiredFieldSchema.min(8),
})

export type LoginForm = yup.InferType<typeof LoginSchema>
