import { Breadcrumb, Layout, Menu } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import{SearchOutlined, AppleOutlined, ShoppingOutlined} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
const App = () => (
    

   
    
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu 
      className='menu'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={[
            {
                key: '3',
                icon: <AppleOutlined />
            },
            {
                key:"4",
                label: "Store",
            },
            {
                key: '5',
                label: 'Mac'
            },
            {
                key: '6',
                label: 'iPad'
            },
            {
                key: '7',
                label: 'iPhone'
            },
            {
                key: '8',
                label: 'Watch'
            },
            {
                key: '9',
                label: 'AirPods'
            },
            {
                key: '10',
                label: 'TV & Home'
            },
            {
                key: '11',
                label: 'Only on Apple'
            },
            {
                key: '12',
                icon: <SearchOutlined/>
            },
            {
                key: '13',
                icon: <ShoppingOutlined />
            }
            

            



        ]}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    
      <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
     
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Copyright Disclaimer under Section 107 of the copyright act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, scholarship, and research
    </Footer>
  </Layout>
);
export default App;