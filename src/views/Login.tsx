import { useAuth } from "@/components/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import userStore from "@/store/user";
import { Button, Form, Input, Radio } from "antd";
function LoginPage() {
  const navigate = useNavigate(),
  location: any = useLocation(),
  auth = useAuth(),
  from = location.state?.from?.pathname || "/"; // 返回访问页或首页

  const handleSubmit = (user: any) => {
    auth.signin(user).then(() => {
      userStore.setUser(user);
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ role: 'admin' }}
        autoComplete="off"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
        >
          <Radio.Group>
            <Radio value="admin">admin</Radio>
            <Radio value="visitor">visitor</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
