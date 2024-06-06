import { useMutation } from '@tanstack/react-query'

import { AuthApi } from '../api/AuthApi'
import { fetcher } from '../fetcher'
import { QueryKeys } from '../QueryKeys'
import { AuthUser } from '../schemas/AuthUser'
import { LoginForm } from '../schemas/Login'
import { UseMutationOptions } from '../types'

export const useLogin = (
  options?: UseMutationOptions<AuthUser, Error, LoginForm>,
) => {
  return useMutation({
    mutationKey: [QueryKeys.login],
    mutationFn: (data) => fetcher(AuthApi.login({ data })),
    ...options,
  })
}
