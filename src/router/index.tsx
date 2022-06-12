import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import HomeRoutes from "./module/home";
const About: any = lazy(() => import('@/views/About'));
const routes: RouteObject[] = [
  HomeRoutes,
  {
    path: "/about",
    element: <About />,
  }
];
export default routes
