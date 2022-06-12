import { Link } from "react-router-dom";
import { Button } from "antd";
import { observer, useLocalObservable, Observer } from "mobx-react-lite";
import { inject } from "mobx-react";

function Home({ goodsStore }) {
  const add = () => {
    goodsStore.setNum(goodsStore.num + 1);
  };
  return (
    <>
      <div>home</div>
      <div>
        <Button type="primary" onClick={add}>
          add
        </Button>
        {goodsStore.num}
      </div>
      <Link to="/about">
        <Button type="primary">about2</Button>
      </Link>
    </>
  );
}

export default inject("goodsStore")(observer(Home));
