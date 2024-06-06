import { getParams, getSearchParamsFromUrl } from '@/utils/getParams'

import {
  Method,
  Schema,
  RequestSchema,
  Data,
  MutationFetch,
  QueryFetch,
  MutationOptions,
  QueryOptions,
  MutationArgs,
  QueryArgs,
} from './types'

export function buildApi<
  M extends Method,
  S extends Schema,
  ReqSchema extends RequestSchema,
  D extends Data,
>(options: MutationOptions<M, S, ReqSchema>): MutationFetch<M, S, ReqSchema, D>

export function buildApi<M extends Method, S extends Schema>(
  options: QueryOptions<M, S>,
): QueryFetch<M, S>

export function buildApi<
  M extends Method,
  S extends Schema,
  ReqSchema extends RequestSchema,
  D extends Data,
>(
  options: QueryOptions<M, S> | MutationOptions<M, S, ReqSchema>,
): QueryFetch<M, S> | MutationFetch<M, S, ReqSchema, D> {
  if ('requestSchema' in options) {
    return (args: Partial<MutationArgs<D>>) => ({
      ...options,
      ...args,
      params: args.params ? getParams(args.params) : undefined,
    })
  }

  return (args?: QueryArgs) => {
    const queryOptions = { ...options }

    if (args?.params) {
      Object.assign(queryOptions, {
        params:
          typeof args.params === 'string'
            ? args.params
            : getParams(args.params),
      })
    }

    if (args?.url) {
      Object.assign(queryOptions, {
        searchParams: {
          ...getSearchParamsFromUrl(args.url),
          ...args?.searchParams,
        },
      })
    } else if (args?.searchParams) {
      Object.assign(queryOptions, { searchParams: args.searchParams })
    }

    return queryOptions
  }
}
