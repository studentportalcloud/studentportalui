import React from "react";
import { Form, Input, Button, Checkbox, Card } from 'antd';
import "./authStyles.css";

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    }
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    }
};

const onFinishFailed = () => {};
const onFinish = () => {};
function LoginComponent() {
        return (
        <div>
            <Card title="Existing Users (Login)" className="form-layout">
                <Form
                {...layout}
                name="basic"
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Please input your email!',
                    },
                ]}
                >
                <Input />
                </Form.Item>
        
                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
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
        </Card>
          </div>
        )
}

export default LoginComponent;