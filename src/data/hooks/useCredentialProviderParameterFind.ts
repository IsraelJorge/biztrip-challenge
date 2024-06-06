import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { useAuth } from '@/contexts/AuthProvider/useAuth'

import { CredentialApi } from '../api/CredentialApi'
import { fetcher } from '../fetcher'
import { QueryKeys } from '../QueryKeys'
import { CredentialProviderParameter } from '../schemas/Credential'
import { QueryArgsParams } from '../types'

export const useCredentialProviderParameterFind = (
  params?: QueryArgsParams,
) => {
  const { auth } = useAuth()

  return useQuery<CredentialProviderParameter>({
    queryKey: [
      QueryKeys.credentialProviderParameterList,
      params?.params,
      auth?.token,
    ],
    queryFn: () =>
      fetcher(
        CredentialApi.getProviderParameter({
          params: { ...params?.params, parameters: 'parameters' },
        }),
        auth?.token,
      ),
    initialData: params?.initialData,
    placeholderData: keepPreviousData,
    enabled: Boolean(auth?.token) && params?.enabled,
  })
}
