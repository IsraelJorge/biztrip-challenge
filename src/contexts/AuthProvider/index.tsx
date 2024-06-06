import { createContext, useEffect, useState } from 'react'

import { UseMutateFunction } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { useLogin } from '@/data/hooks/useLogin'
import { AuthUser } from '@/data/schemas/AuthUser'
import { LoginForm } from '@/data/schemas/Login'
import {
  getLocalStorageValue,
  setValueLocalStorage,
} from '@/utils/localStorage'
import { Route } from '@/utils/ui/Route'

import { useToast } from '../ToastProvider/useToast'

type AuthProviderProps = {
  children: JSX.Element
}

type Auth = {
  user: AuthUser['user']
  token: string
}

type AuthContextData = {
  auth: Auth | null
  signIn: UseMutateFunction<AuthUser, Error, LoginForm>
  signOut: () => void
  isLoadingSignIn: boolean
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth | null>(null)
  const { showToast } = useToast()
  const navigate = useNavigate()

  const { mutate: signIn, isPending } = useLogin({
    onSuccess: (data) => {
      const auth = {
        user: data.user,
        token: data.token.value,
      }
      setAuth(auth)
      setValueLocalStorage('@auth', auth)
      navigate(Route.home)
    },
    onError: (e) => {
      showToast({ message: e.message, type: 'error' })
    },
  })

  const signOut = () => {
    setAuth(null)
    setValueLocalStorage('@auth', null)
    navigate(Route.login)
  }

  useEffect(() => {
    const auth = getLocalStorageValue<Auth>('@auth')

    if (auth && auth?.token) {
      setAuth(auth)
      return
    }

    navigate(Route.login)
  }, [navigate])

  return (
    <AuthContext.Provider
      value={{
        auth,
        signIn,
        signOut,
        isLoadingSignIn: isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
