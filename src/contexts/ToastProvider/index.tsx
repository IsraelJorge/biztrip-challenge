import { createContext, useState } from 'react'

import { TypeAlert } from '@/components/Alert'

type ToastProviderProps = {
  children: JSX.Element[] | JSX.Element
}

type ToastOptions = {
  open: boolean

  message: string
  type: TypeAlert
}

type ToastContext = {
  showToast: (options: Omit<ToastOptions, 'open'>) => void
  closeToast: () => void
  onOpenChange: (open: boolean) => void
  toast: ToastOptions | null
}

export const ToastContext = createContext({} as ToastContext)

export function ToastProvider({ children }: ToastProviderProps) {
  const [toast, setToast] = useState<ToastOptions | null>(null)

  function showToast(options: Omit<ToastOptions, 'open'>) {
    setToast({ ...options, open: true })
  }

  function onOpenChange(open: boolean) {
    setToast((prev) => {
      if (prev) {
        return { ...prev, open }
      }
      return null
    })
  }

  function closeToast() {
    setToast((prev) => {
      if (prev) {
        return { ...prev, open: false }
      }
      return null
    })
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        toast,
        closeToast,
        onOpenChange,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}
