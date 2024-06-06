import { getSearchParams } from '@/utils/getParams'

import { buildParams } from './buildParams'
import { buildUrl } from './buildUrl'
import { SchemaValidationError } from './errors/errors'
import {
  Data,
  Method,
  RequestSchema,
  ResponseSchema,
  Fetcher,
  MutationAPI,
  YupOutput,
  QueryAPI,
} from './types'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const fetcher = async <
  M extends Method,
  ResSchema extends ResponseSchema,
  ReqSchema extends RequestSchema,
  D extends Data,
>(
  options: Fetcher<M, ResSchema, ReqSchema, D>,
  token?: string,
): Promise<YupOutput<ResSchema>> => {
  try {
    let data: Data | FormData | undefined
    let url = options.url
    let params

    if (
      options.method === 'POST' ||
      options.method === 'PUT' ||
      options.method === 'PATCH'
    ) {
      const mutate = options as MutationAPI<M, ResSchema, ReqSchema, D>

      const result = await mutate.requestSchema
        .validate(mutate.data, {
          strict: true,
        })
        .catch((e) => {
          throw new SchemaValidationError(e, { data: mutate.data })
        })

      data = result
      url = buildUrl(options.url, mutate.params)
    } else {
      const query = options as QueryAPI<M, ResSchema>

      url = buildUrl(options.url, query.params)
      params = buildParams(query.searchParams ?? {})
      const searchParams = getSearchParams(params)
      url = `${url}${searchParams}`
    }

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }

    if (token) {
      Object.assign(headers, {
        Authorization: `Bearer ${token}`,
      })
    }

    const requestDefaultOptions: RequestInit = {
      method: options.method,
      headers: headers,
      body: JSON.stringify(data),
    }

    const response = await fetch(baseUrl + url, {
      ...requestDefaultOptions,
      ...options.optionsFetch,
    })

    if (!response.ok) {
      const json = await response.json()
      throw new Error(json.message)
    }

    if (options.responseSchema) {
      const json = await response.json()

      if (!response.ok) {
        throw new Error(json.message)
      }

      const result = await options.responseSchema.validate(json).catch((e) => {
        throw new SchemaValidationError(e, json)
      })

      return result
    }

    return Promise.resolve(undefined)
  } catch (error) {
    return Promise.reject(error)
  }
}
