import React from 'react';
import { Button, Select, Form, Input } from 'antd';

enum TypeServices {
  onpremise = 'onpremise',
  standard = 'standard',
  saas = 'saas',
}
interface ICompany {
  clientId: string;
  nameCompany: string;
  typeServices: string;
}
const company: ICompany[] = [
  {
    clientId: 'airasia',
    nameCompany: 'Air Asia',
    typeServices: TypeServices.onpremise,
  },
  {
    clientId: 'samsung',
    nameCompany: 'Air Asia',
    typeServices: TypeServices.onpremise,
  },
  {
    clientId: 'bluebird',
    nameCompany: 'Air Asia',
    typeServices: TypeServices.onpremise,
  },
];

const onFinish = (values: any) => {
  const index = company.findIndex((e) => e.clientId === values.company);
  if (index >= 0) {
    if (company[index].typeServices !== TypeServices.standard) {
      localStorage.setItem('type-services', 'custom');
    } else {
      localStorage.setItem('type-services', 'standard');
    }
    localStorage.setItem('clientId', company[index].clientId);
    alert('akses telah dibuat');
  } else {
    localStorage.clear();
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
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
                    { value: 'airasia', label: 'PT. Air Asia' },
                    { value: 'bluebird', label: 'PT. BlueBird TBK' },
                    { value: 'samsung', label: 'PT. Samsung Abadi' },
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
