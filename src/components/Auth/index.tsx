import routes from "@/router";
import { useLocalStorage } from "@/utils/hooks";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { matchRoutes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { RouteObjectExt } from '@/types/routes';
import userStore from "@/store/user";

const AuthContext = createContext<AuthContextType>(null!);
/**
 * @description 注入user及登录、登出
 * @param {children} 子路由
 * @returns Provider
 */
function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage("user", null);
  userStore.setUser(user); // 下次重新打开或刷新 设置user
  const navigate = useNavigate();
  const signin = async (user) => {
    setUser(user);
    userStore.setUser(user);
  };
  // 登出
  const signout = () => {
    userStore.setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      signin,
      signout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
/**
 * @description Hook
 * @returns
 */
function useAuth() {
  return useContext(AuthContext);
}

/**
 * @description 验证权限
 * @param {children} 权限通过渲染
 * @returns 组件
 */
function RequireAuth({ children }: { children: JSX.Element }) {
  const { role, isLogin } = userStore,
    location = useLocation(),
    { pathname } = location,
    current = pathname.includes("login");
  // 判断用户权限
  const [{ route }] = matchRoutes(routes, pathname)!,
  { roles } = route as RouteObjectExt;
  if (isLogin) { // 已登录
    if (roles) { // 存在权限页面
      const isRole = roles.length ? roles.some(e => e === role) : true;
      if (current || !isRole) { // 访问login，返回到首页；或当前用户无权限
        return <Navigate to="/" replace />;
      }
    }
  } else {  // 未登录
    if (roles && !current) { // 权限页面，重定向login
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
  return children;
}

export { AuthProvider, useAuth, RequireAuth };
