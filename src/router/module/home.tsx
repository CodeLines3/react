

import { lazy } from 'react';
import Child from '@/views/Child'
import { RouteObjectExt } from '@/types/routes';
const Home: any = lazy(() => import('@/views/Home'));

const homeRoutes: RouteObjectExt = {
  path: "/",
  element: <Home />,
  roles: ['admin', 'visitor'],
  children: [
    {
      path: '',
      element: <Child />
    }
  ]
}
export default homeRoutes