import React from 'react'
import { RouteObject } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]

export default routes