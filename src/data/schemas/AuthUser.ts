import { yup } from '@/lib/yup'

import { RequiredFieldSchema } from './Shared'

export const AuthUserSchema = yup.object().shape({
  token: yup.object().shape({
    type: RequiredFieldSchema,
    value: RequiredFieldSchema,
  }),
  user: yup
    .object()
    .shape({
      uuid: RequiredFieldSchema,
      name: RequiredFieldSchema,
      email: RequiredFieldSchema,
      avatarUrl: RequiredFieldSchema,
    })
    .camelCase(),
})

export type AuthUser = yup.InferType<typeof AuthUserSchema>
