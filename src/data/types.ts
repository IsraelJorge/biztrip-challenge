import {
  DefaultError,
  UseMutationOptions as Mutation,
} from '@tanstack/react-query'

import { yup } from '@/lib/yup'

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type ResponseSchema = yup.AnySchema
export type RequestSchema = yup.AnySchema
export type Schema = yup.AnySchema
export type Data = Record<string, unknown>
export type YupOutput<R extends RequestSchema> = yup.InferType<R>

export type QueryOptions<M extends Method, S extends Schema> = {
  url: string
  method: M
  responseSchema?: S
  optionsFetch?: RequestInit
  responseType?: ResponseType
}

export type MutationOptions<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
> = QueryOptions<M, ResSchema> & {
  requestSchema: ReqSchema
  isFormData?: boolean
  transform?: (data: YupOutput<ReqSchema>) => Data
}

export type QueryAPI<
  M extends Method,
  ResSchema extends RequestSchema,
> = QueryOptions<M, ResSchema> & {
  params?: string | Array<string>
  searchParams?: Params
}

export type MutationAPI<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
> = MutationOptions<M, ResSchema, ReqSchema> & {
  request?: Request
  data?: D
  params?: string | Array<string>
  formData?: FormData
}

export type QueryArgs = {
  params?: Params | string
  searchParams?: Params
  url?: string
}

export type MutationArgs<D extends Data> = {
  params?: Params | string
  request?: Request
  data?: D
  formData?: FormData
}

export type QueryFetch<M extends Method, ResSchema extends RequestSchema> = (
  args?: QueryArgs,
) => QueryAPI<M, ResSchema>

export type MutationFetch<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
> = (args: Partial<MutationArgs<D>>) => MutationAPI<M, ResSchema, ReqSchema, D>

export type Fetcher<
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
> = QueryAPI<M, ResSchema> | MutationAPI<M, ResSchema, ReqSchema, D>

export type UseMutationOptions<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
> = Omit<
  Mutation<TData, TError, TVariables, TContext>,
  'mutationKey' | 'mutationFn'
>

export type Params = Record<string, string>
export type QueryParams = string | Array<string> | Params
export type QueryArgsParams = {
  initialData?: any
  searchParams?: Params
  params?: Params
  enabled?: boolean
}
export type SuccessResponse = {
  message: string
}
