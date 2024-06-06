import { FormHTMLAttributes, useEffect } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import { yup } from '@/lib/yup'

type FormSchema = yup.ObjectSchema<any>

type FormProps<Schema extends FormSchema> = {
  schema: Schema
  children: (methods: UseFormReturn<yup.InferType<Schema>, any>) => JSX.Element
  onSubmit?: (data: yup.InferType<Schema>) => void | Promise<void>
  defaultValues?: yup.InferType<Schema>
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'children' | 'onSubmit'> & {
    useFormProps?: UseFormProps<yup.InferType<Schema>>
  }

export function Form<Schema extends FormSchema>({
  children,
  useFormProps,
  schema,
  onSubmit,
  defaultValues,
  ...props
}: FormProps<Schema>) {
  const methods = useForm({
    ...useFormProps,
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (defaultValues) {
      methods.reset(defaultValues)
    }
  }, [defaultValues, methods])

  return (
    <form
      onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
      {...props}
    >
      {children(methods)}
    </form>
  )
}
