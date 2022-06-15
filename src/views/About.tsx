import { Button } from "antd";
import { inject, MobXProviderContext, observer } from "mobx-react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
import goodsStore from "@/store/goods";

function About() {
  const add = () => {
    goodsStore.setNum(goodsStore.num + 1);
  };
  // console.log(useContext(MobXProviderContext))
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

export default inject('goodsStore')(observer(About));
