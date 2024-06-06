import { yup } from '@/lib/yup'

import { PageSchema, RequiredFieldSchema } from './Shared'

export const CredentialSchema = yup
  .object()
  .shape({
    credentialUuid: RequiredFieldSchema,
    description: RequiredFieldSchema,
    serviceType: RequiredFieldSchema,
    provider: yup
      .object()
      .shape({
        uuid: RequiredFieldSchema,
        name: RequiredFieldSchema,
        description: yup.string().nullable(),
        serviceType: yup.string().nullable(),
      })
      .camelCase(),
    credentialValues: yup.array().of(
      yup.object().shape({
        uuid: RequiredFieldSchema,
        value: RequiredFieldSchema,
      }),
    ),
    active: yup.boolean().required(),
  })
  .camelCase()

export type Credential = yup.InferType<typeof CredentialSchema>

export const CredentialPageSchema = PageSchema.shape({
  data: yup.array().of(CredentialSchema),
})

export type CredentialPage = yup.InferType<typeof CredentialPageSchema>

export const CredentialEditForm = yup.object().shape({
  providerId: RequiredFieldSchema,
  description: RequiredFieldSchema,
  service_type: RequiredFieldSchema,
  credentials: yup
    .array()
    .of(
      yup.object().shape({
        uuid: RequiredFieldSchema,
        value: RequiredFieldSchema,
      }),
    )
    .required(),
})

export type CredentialEditForm = yup.InferType<typeof CredentialEditForm>

export const CredentialProviderFormSchema = yup.object().shape({
  providerId: RequiredFieldSchema,
  description: RequiredFieldSchema,
  service_type: RequiredFieldSchema,
  parameters: yup.array().of(
    yup.object().shape({
      credential_parameter_uuid: RequiredFieldSchema,
      value: RequiredFieldSchema,
    }),
  ),
})

export type CredentialProviderForm = yup.InferType<
  typeof CredentialProviderFormSchema
>

export const CredentialProviderParameterSchema = yup.object().shape({
  data: yup.object().shape({
    service_types: yup.array().of(yup.string()),
    parameters: yup.array().of(
      yup.object().shape({
        uuid: RequiredFieldSchema,
        title: yup.string().nullable(),
        description: RequiredFieldSchema,
        input_type: RequiredFieldSchema,
        required: yup.boolean().required(),
      }),
    ),
  }),
})

export type CredentialProviderParameter = yup.InferType<
  typeof CredentialProviderParameterSchema
>
