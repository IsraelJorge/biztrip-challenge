import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { useAuth } from '@/contexts/AuthProvider/useAuth'

import { ProviderApi } from '../api/ProviderApi'
import { fetcher } from '../fetcher'
import { QueryKeys } from '../QueryKeys'
import { ProviderPage } from '../schemas/Provider'
import { QueryArgsParams } from '../types'

export const useProviderFind = (params?: QueryArgsParams) => {
  const { auth } = useAuth()

  return useQuery<ProviderPage>({
    queryKey: [QueryKeys.providerList, params?.searchParams, auth?.token],
    queryFn: () =>
      fetcher(
        ProviderApi.get({
          searchParams: params?.searchParams,
        }),
        auth?.token,
      ),
    initialData: params?.initialData,
    placeholderData: keepPreviousData,
    enabled: Boolean(auth?.token) && params?.enabled,
  })
}
