

import { lazy } from 'react';
const Home: any = lazy(() => import('@/views/Home'));
const routes = {
  path: "/",
  element: <Home />,
}
export default routes