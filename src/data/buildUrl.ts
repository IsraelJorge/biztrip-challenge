export const buildUrl = (url: string, params?: string | string[]) => {
  if (!params) return url

  if (url.includes('/:')) {
    const regex = /\/:\w+\//
    return url.replace(regex, `/${params}/`)
  }

  if (typeof params === 'string') return `${url}/${params}`

  return `${url}/${params.join('/')}`
}
