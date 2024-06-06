import { yup } from '@/lib/yup'

import { RequiredFieldSchema } from './Shared'

export const ProviderSchema = yup
  .object()
  .shape({
    uuid: RequiredFieldSchema,
    name: RequiredFieldSchema,
    slug: RequiredFieldSchema,
    logo: yup.string().nullable(),
    serviceType: yup.string(),
    active: yup.boolean().required(),
    providerServices: yup.array().of(
      yup
        .object()
        .shape({
          uuid: RequiredFieldSchema,
          providerUuid: RequiredFieldSchema,
          serviceType: RequiredFieldSchema,
          ordersOnline: yup.number().required(),
        })
        .camelCase(),
    ),
  })
  .camelCase()

export type Provider = yup.InferType<typeof ProviderSchema>

export const ProviderPageSchema = yup.array().of(ProviderSchema)

export type ProviderPage = yup.InferType<typeof ProviderPageSchema>
