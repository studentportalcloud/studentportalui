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

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    onFinish(values) {
        console.log('Success:', values);
    }

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    }
    render() {
        return (
        <div>
            <Card title="Existing Users (Login)" className="form-layout">
                <Form
                {...layout}
                name="basic"
                initialValues={{
                remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
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
}

export default LoginComponent;