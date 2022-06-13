import { Button } from "antd";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

function About({ goodsStore }) {
  console.log('about')
  const add = () => {
    goodsStore.setNum(goodsStore.num + 1);
  };
  return (
    <>
      <Button type="primary" onClick={add}>
        add
      </Button>
      <div>about {goodsStore.num}</div>
      <Link to="/">
        <Button type="primary">home</Button>
      </Link>
    </>
  );
}

export default inject("goodsStore")(observer(About));
