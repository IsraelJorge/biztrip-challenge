import { QueryClientProvider } from '@tanstack/react-query'

import { Toast } from '@/components/Toast'
import { ToastProvider } from '@/contexts/ToastProvider'
import { queryClient } from '@/data/reactQueryClient'
import { RouterProvider } from '@/routes/RouterProvider'

export function Providers() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Toast />
        <RouterProvider />
      </ToastProvider>
    </QueryClientProvider>
  )
}
