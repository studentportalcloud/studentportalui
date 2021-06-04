import React from "react";
import { Form, Input, Button, Checkbox, Card, DatePicker, TreeSelect } from 'antd';


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    }
};
const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    }
};

class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined
        };
        this.treeData = [
            {
              title: 'Elementary',
              value: '0-0',
              selectable:false,
              children: [
                {
                  title: 'Class - I',
                  value: '0-0-1',
                },
                {
                  title: 'Class - IX',
                  value: '0-0-2',
                },
              ],
            },
            {
              title: 'Bachelors',
              value: '0-1',
              selectable:false,
              children: [
                    {
                        title: "Engineering",
                        value: '0-0-0-1',
                        selectable:false,
                        children: [
                          {
                              title: "Computer",
                              value: "0-0-0-0-1",
                              selectable:false,
                              children: [
                                  {
                                      title: "Year - I",
                                      value: "0-0-0-0-0-0-1",
                                      treeNodeLabelProp: ".../Engineering/Computer/Year -I"
                                  },
                                  {
                                    title: "Year - II",
                                    value: "0-0-0-0-0-0-2"
                                }
                              ]
                          }
                      ]
                  }
              ]
            },
          ];
    }

    onChange = value => {
        console.log(value);
        this.setState({ value });
      };
    render() {
        return (
            <div>
                <Card title="New Users (Create Account)" className="form-layout">
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
                        label="Name"
                        name="name"
                        rules={[
                            {
                            required: true,
                            message: 'Name',
                            },
                        ]}
                        >
                        <Input />
                        </Form.Item>
                        
                        <Form.Item
                        label="Date of Birth"
                        name="dob"
                        rules={[
                            {
                            required: true,
                            message: 'Date of Birth',
                            },
                        ]}
                        >
                            <DatePicker />
                        </Form.Item>
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
                
                        <Form.Item
                        label="Confirm Password"
                        name="confirm_password"
                        rules={[
                            {
                            required: true,
                            message: 'Please reenter your password!',
                            },
                        ]}
                        >
                        <Input.Password />
                        </Form.Item>
                        
                        <Form.Item
                        label="Classroom"
                        name="classroom"
                        rules={[
                            {
                            required: true,
                            message: 'Select Classroom!',
                            },
                        ]}
                        >
                        <TreeSelect
                        style={{ width: '100%' }}
                        value={this.state.value}
                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                        treeData={this.treeData}
                        labelInValue={false}
                        treeNodeLabelProp="treeNodeLabelProp"
                        placeholder="Please select"
                        // treeDefaultExpandAll
                        onChange={this.onChange}
                    />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Create Account
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }

}

export default SignupComponent;