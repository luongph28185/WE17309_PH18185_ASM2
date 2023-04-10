import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const Signin = (props:any) => {
  const onFinish = (values: any) => {
    props.onSignin(values);
  };

  return (
   <div  className='w-[400px] ml-[400px]'>
    <h3 className='my-5 font-bold'>Đăng Nhập</h3>
     <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button mr-5 bg-black">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
   </div>
  );
};

export default Signin;