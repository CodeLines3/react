import { RouteObject } from "react-router-dom";
import HomeRoutes from "./module/home";
import About from '@/views/About';
const routes: RouteObject[] = [
  HomeRoutes,
  {
    path: "/about",
    element: <About />,
  }
];
export default routes
