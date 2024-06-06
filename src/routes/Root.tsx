import { Outlet } from 'react-router-dom'

import { MainLayout } from '@/components/layouts/styled'
import { AuthProvider } from '@/contexts/AuthProvider'

export const Root = () => {
  return (
    <AuthProvider>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AuthProvider>
  )
}
