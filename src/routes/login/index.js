// import react from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { connect } from 'dva';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const Login = (props) => {
   const {dispatch} = props
  const onFinish = (values) => {
    const {username, password} = values
    dispatch({
      type: 'login/login',
      payload: {
        username,
        password
      }
    })
  };
  const onFinishFailed = () => {
    console.log("onFinishFailed++");
  };

  return (
    <>
      <div style={{height: '100vh', overflow: 'hidden'}}>
        <div style={{ width: 560, margin: "40px auto 0" }}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default connect(({ login}) => ({
  login
}))(Login);