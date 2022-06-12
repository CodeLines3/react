import { Button } from "antd";
import { inject, observer } from "mobx-react";

function About({ goodsStore }) {
  const add = () => {
    goodsStore.setNum(goodsStore.num + 1);
  };
  return (
    <>
      <Button type="primary" onClick={add}>
        add
      </Button>
      <div>about {goodsStore.num}</div>
    </>
  );
}

export default inject("goodsStore")(observer(About));
