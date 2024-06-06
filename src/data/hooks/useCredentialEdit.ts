import { Query, QueryKey, useMutation } from '@tanstack/react-query'

import { useAuth } from '@/contexts/AuthProvider/useAuth'

import { CredentialApi } from '../api/CredentialApi'
import { fetcher } from '../fetcher'
import { QueryKeys } from '../QueryKeys'
import { queryClient } from '../reactQueryClient'
import { CredentialEditForm, CredentialPage } from '../schemas/Credential'
import { SuccessResponse, UseMutationOptions } from '../types'

type useCredentialFindContext = {
  previousCredential?: [QueryKey, CredentialPage][]
}

export const useCredentialEdit = (
  options?: UseMutationOptions<
    SuccessResponse,
    Error,
    CredentialEditForm,
    useCredentialFindContext
  >,
) => {
  const { auth } = useAuth()

  return useMutation({
    mutationKey: [QueryKeys.credentialEdit],
    mutationFn: (data) => fetcher(CredentialApi.put({ data }), auth?.token),
    ...options,
    onSettled: (data, err, variable, context) => {
      queryClient.invalidateQueries({
        predicate: (query: Query) =>
          query.queryKey.includes(QueryKeys.credentialList),
      })
      options?.onSettled?.(data, err, variable, context)
    },
  })
}
