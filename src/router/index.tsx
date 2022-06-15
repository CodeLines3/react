
import HomeRoutes from "./module/home";
import About from '@/views/About';
import Login from '@/views/Login';
import Visitor from '@/views/Visitor';
import { RouteObjectExt } from "@/types/routes";
import NoMatch from '@/views/NoMatch';
const routes: RouteObjectExt[] = [
  HomeRoutes,
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/visitor",
    element: <Visitor/>,
    roles: ['visitor']
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "*",
    element: <NoMatch />
  }
];
export default routes
