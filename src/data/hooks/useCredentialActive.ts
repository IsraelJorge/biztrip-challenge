import { Query, QueryKey, useMutation } from '@tanstack/react-query'

import { useAuth } from '@/contexts/AuthProvider/useAuth'

import { CredentialApi } from '../api/CredentialApi'
import { fetcher } from '../fetcher'
import { QueryKeys } from '../QueryKeys'
import { queryClient } from '../reactQueryClient'
import { CredentialPage } from '../schemas/Credential'
import { Id } from '../schemas/Shared'
import { SuccessResponse, UseMutationOptions } from '../types'

type useCredentialFindContext = {
  previousCredential?: [QueryKey, CredentialPage][]
}

export const useCredentialActive = (
  options?: UseMutationOptions<
    SuccessResponse,
    Error,
    Id,
    useCredentialFindContext
  >,
) => {
  const { auth } = useAuth()

  return useMutation({
    mutationKey: [QueryKeys.credentialActive],
    mutationFn: (data) =>
      fetcher(CredentialApi.active({ params: { id: data.id } }), auth?.token),

    ...options,
    onMutate: (obj: Id) => {
      const previousCredentials = queryClient.getQueriesData<CredentialPage>({
        predicate: (query: Query) =>
          query.queryKey.includes(QueryKeys.credentialList),
      })

      queryClient.setQueriesData<CredentialPage | undefined>(
        {
          predicate: (query: Query) =>
            query.queryKey.includes(QueryKeys.credentialList),
        },
        (previousData) =>
          previousData
            ? {
                ...previousData,
                data: previousData.data?.map((credential) =>
                  credential.credentialUuid === obj.id
                    ? { ...credential, active: true }
                    : credential,
                ),
              }
            : undefined,
      )

      if (options?.onMutate) {
        return { previousCredentials, ...(options.onMutate(obj) ?? {}) }
      }

      return { previousCredentials }
    },
    onError: (err, variable, context) => {
      if (context?.previousCredential) {
        for (const [queryKey, objs] of context.previousCredential) {
          queryClient.setQueryData(queryKey, () => objs)
        }
      }
      options?.onError?.(err, variable, context)
    },
    onSettled: (data, err, variable, context) => {
      queryClient.invalidateQueries({
        predicate: (query: Query) =>
          query.queryKey.includes(QueryKeys.credentialList),
      })
      options?.onSettled?.(data, err, variable, context)
    },
  })
}
