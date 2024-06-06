import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { useAuth } from '@/contexts/AuthProvider/useAuth'

import { CredentialApi } from '../api/CredentialApi'
import { fetcher } from '../fetcher'
import { QueryKeys } from '../QueryKeys'
import { Credential } from '../schemas/Credential'
import { QueryArgsParams } from '../types'

export const useCredentialGet = (params?: QueryArgsParams) => {
  const { auth } = useAuth()

  return useQuery<Credential>({
    queryKey: [QueryKeys.credential, params?.params, auth?.token],
    queryFn: () =>
      fetcher(
        CredentialApi.getById({
          params: params?.params,
        }),
        auth?.token,
      ),
    initialData: params?.initialData,
    placeholderData: keepPreviousData,
    enabled: Boolean(auth?.token) && params?.enabled,
  })
}
