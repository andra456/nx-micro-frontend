import React from 'react';
import { Button, Select, Form, Input } from 'antd';

const onFinish = (values: any) => {
  if (values.company === 'onpremise') {
    localStorage.setItem('customize', 'feature-standard-a');
  } else {
    localStorage.clear();
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const AuthPage = () => {
  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="flex h-full flex-wrap items-center justify-center">
          <div className="border rounded-md border-solid border-inherit border-slate-300 mr-20 p-10 bg-slate-50 w-[380px]">
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item name="username" label="Username or email address">
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item name="password" label="Password">
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item name="company" label="Companies">
                <Select
                  placeholder="Choose company"
                  options={[
                    { value: 'onpremise', label: 'PT. ABC' },
                    { value: 'standard', label: 'PT. DBA' },
                  ]}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" danger block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
