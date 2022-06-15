
import { RouteObject } from "react-router-dom";

export interface RouteObjectExt extends RouteObject {
  roles?: string[] = []; // 用户权限
}