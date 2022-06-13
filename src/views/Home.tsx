import { Link } from "react-router-dom";
import { Button } from "antd";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";

function Home({ goodsStore }) {
  const add = () => {
    goodsStore.setNum(goodsStore.num + 1);
  };
  return (
    <>
      <div className="border1px">home</div>
      <div>
        <Button type="primary" onClick={add}>
          add
        </Button>
        {goodsStore.num}
      </div>
      <Link to="/about">
        <Button type="primary">about</Button>
      </Link>
    </>
  );
}

export default inject("goodsStore")(observer(Home));
