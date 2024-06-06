import { Params } from './types'

export const buildParams = (obj?: Record<string, unknown>): Params => {
  if (!obj) return {}

  const params = {}
  const keys = Object.keys(obj)

  for (const key of keys) {
    if (obj[key]) {
      Object.assign(params, { [key as string]: obj[key] })
    }
  }

  return params
}

export const buildSearchParams = <T extends Record<string, unknown>>(
  params: URLSearchParams,
): T => {
  const searchParams = {}

  params.forEach((value, key) => {
    Object.assign(searchParams, { [key]: value })
  })

  return searchParams as T
}
