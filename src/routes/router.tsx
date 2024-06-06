import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'
import { Route } from '@/utils/ui/Route'

import { Root } from './Root'

export const router = createBrowserRouter([
  {
    path: Route.home,
    element: <Root />,
    children: [
      {
        path: Route.login,
        element: <Login />,
      },
      {
        path: Route.home,
        element: <Home />,
      },
    ],
  },
])
