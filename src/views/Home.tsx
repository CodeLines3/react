import { Link, Outlet } from "react-router-dom";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import goodsStore from "@/store/goods";
import userStore from "@/store/user";
import { useAuth } from "@/components/Auth";
import { inject } from "mobx-react";


function Home(props) {
  const auth = useAuth();
  const add = () => {
    goodsStore.setNum(goodsStore.num + 1);
  };
  const logout = () => {
    auth.signout();
  }
  const link = userStore.role === "admin" ? "about" : "visitor";
  return (
    <>
      <div className="border1px">{userStore.username}</div>
      <Button type="primary" onClick={logout}>
        退出
      </Button>
      <div>
        <Button type="primary" onClick={add}>
          add
        </Button>
        {goodsStore.num}
      </div>
      <Link to={"/" + link}>
        <Button type="primary">{link}</Button>
      </Link>
      <Outlet />
    </>
  );
}

export default inject('goodsStore')(observer(Home));
