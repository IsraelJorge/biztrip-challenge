import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { useAuth } from '@/contexts/AuthProvider/useAuth'

import { CredentialApi } from '../api/CredentialApi'
import { fetcher } from '../fetcher'
import { QueryKeys } from '../QueryKeys'
import { CredentialPage } from '../schemas/Credential'
import { QueryArgsParams } from '../types'

export const useCredentialFind = (params?: QueryArgsParams) => {
  const { auth } = useAuth()

  return useQuery<CredentialPage>({
    queryKey: [QueryKeys.credentialList, params?.searchParams, auth?.token],
    queryFn: () =>
      fetcher(
        CredentialApi.get({
          searchParams: params?.searchParams,
        }),
        auth?.token,
      ),
    initialData: params?.initialData,
    placeholderData: keepPreviousData,
    enabled: Boolean(auth?.token) && params?.enabled,
  })
}
