import { Button } from "antd";
import { Link } from "react-router-dom";

function NoMatch() {
  return <div>
    <p>访问不存在的页面</p>
    <Link to="/">
      <Button type="primary">返回</Button>
    </Link>
  </div>
}

export default NoMatch