import React, { useState } from 'react'

import { useCredentialProviderParameterFind } from '@/data/hooks/useCredentialProviderParameterFind'
import { useProviderFind } from '@/data/hooks/useProviderFind'
import {
  CredentialProviderFormSchema,
  CredentialProviderForm,
} from '@/data/schemas/Credential'

import { Form } from '../Form'
import { Input } from '../Input'
import { InputPassword } from '../Input/InputPassword'
import { Select } from '../Select'
import { Section } from './styled'

export type CredentialFormProps = Omit<
  React.ComponentProps<'form'>,
  'onSubmit'
> & {
  onCredentialSubmit: (data: CredentialProviderForm) => void
  defaultValues?: CredentialProviderForm
}

const serviceTypeMap: { [key: string]: string } = {
  vehicle: 'Veículo',
  hotel: 'Hotel',
  airway: 'Aéreo',
  road: 'Rodoviário',
}

export const CredentialForm = ({
  onCredentialSubmit,
  defaultValues,
  ...props
}: CredentialFormProps) => {
  const [providerSelectedId, setProviderSelectedId] = useState(
    defaultValues?.providerId || '',
  )

  const { data: providers } = useProviderFind()

  const { data: credentialProviderParameter } =
    useCredentialProviderParameterFind({
      params: { provider: defaultValues?.providerId || providerSelectedId },
      enabled:
        Boolean(providerSelectedId) || Boolean(defaultValues?.providerId),
    })

  const fieldsParameters = credentialProviderParameter?.data.parameters ?? []

  return (
    <Form
      schema={CredentialProviderFormSchema}
      onSubmit={onCredentialSubmit}
      defaultValues={defaultValues}
      useFormProps={{
        shouldUnregister: true,
      }}
      {...props}
    >
      {({ register, control, watch, formState: { errors }, setValue }) => {
        const providerId = watch('providerId')

        const providerServices =
          providers
            ?.find((provider) => provider.uuid === providerId)
            ?.providerServices?.map((value) => ({
              ...value,
              serviceTLabel: serviceTypeMap[value.serviceType],
            })) ?? []

        return (
          <Section>
            <Select
              label="Fornecedor"
              placeholder="Selecione o fornecedor"
              data={providers}
              name="providerId"
              displayKey="name"
              valueKey="uuid"
              onChange={(value) => {
                setProviderSelectedId(value?.uuid ?? '')
                setValue('service_type', '')
                setValue('parameters', [])
              }}
              required
              control={control}
            >
              <Select.Error message={errors.providerId?.message} />
            </Select>
            <Input
              label="Nome da credencial"
              required
              {...register('description')}
            >
              <Input.Error message={errors.description?.message} />
            </Input>
            <Select
              label="Tipo de Serviço"
              placeholder="Selecione o tipo de serviço"
              data={providerServices}
              name="service_type"
              displayKey="serviceTLabel"
              valueKey="serviceType"
              required
              control={control}
            >
              <Select.Error message={errors.service_type?.message} />
            </Select>
            {fieldsParameters.map((parameter, index) => {
              const isInputText =
                parameter.input_type === 'text' ||
                parameter.input_type === 'int'

              return (
                <React.Fragment key={parameter.uuid + index}>
                  <input
                    type="hidden"
                    defaultValue={parameter.uuid}
                    {...register(
                      `parameters.${index}.credential_parameter_uuid`,
                      { shouldUnregister: true },
                    )}
                  />
                  {isInputText ? (
                    <Input
                      key={parameter.uuid}
                      label={parameter.title}
                      placeholder={parameter.description}
                      required={parameter.required}
                      type={parameter.input_type}
                      {...register(`parameters.${index}.value`, {
                        shouldUnregister: true,
                      })}
                    >
                      <Input.Error
                        message={errors.parameters?.[index]?.value?.message}
                      />
                    </Input>
                  ) : (
                    <InputPassword
                      key={parameter.uuid}
                      label={parameter.title}
                      placeholder={parameter.description}
                      required={parameter.required}
                      {...register(`parameters.${index}.value`, {
                        shouldUnregister: true,
                      })}
                    >
                      <Input.Error
                        message={errors.parameters?.[index]?.value?.message}
                      />
                    </InputPassword>
                  )}
                </React.Fragment>
              )
            })}
          </Section>
        )
      }}
    </Form>
  )
}
