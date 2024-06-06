import { yup } from '@/lib/yup'

import { Message } from '../errors/message'

export const PageSchema = yup.object().shape({
  meta: yup
    .object()
    .shape({
      currentPage: yup.number().required(),
      lastPage: yup.number().required(),
      total: yup.number().required(),
    })
    .camelCase(),
})

export const RequiredFieldSchema = yup.string().required(Message.required)

export const IdSchema = yup.object().shape({
  id: RequiredFieldSchema,
})

export type Id = yup.InferType<typeof IdSchema>
