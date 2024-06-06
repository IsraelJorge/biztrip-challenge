import { Params } from '@/data/types'

export const getParams = (
  params: Record<string, string | undefined> | string,
): string | string[] => {
  if (typeof params === 'string') return params
  return Object.values(params).filter((p) => Boolean(p)) as string[]
}

export const getSearchParamsFromUrl = (url: string): Params => {
  const urlObj = new URL(url)

  const params = {}
  urlObj.searchParams.forEach((value, key) =>
    Object.assign(params, { [key]: value }),
  )

  return params
}

export const getSearchParams = (params: Params): string => {
  if (!Object.keys(params).length) return ''

  const searchParams = new URLSearchParams(params)
  return `?${searchParams.toString()}`
}
