import MainLayout from '@/components/MainLayout'
import { Button, Card, Divider, Form, Input } from 'antd'
import fbicon from '@/images/facebook.png'
import googleIcon from '@/images/google.png'

import Image from 'next/image'

const login = () => {
  const { Meta } = Card
  return (
    <MainLayout>
      <Card className="sign-card shadow" style={{ width: 600 }}>
        <Divider orientation="left">
          <h5>Sign Up</h5>
        </Divider>
        <Form
          name="nest-messages"
          //   onFinish={onFinish}
          //   validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'firstName']}
            rules={[
              { required: true, message: 'Please input your First Name' },
            ]}
          >
            <Input placeholder="First Name" allowClear />
          </Form.Item>
          <Form.Item name={['user', 'lastName']}>
            <Input placeholder="Last Name" allowClear />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your email',
              },
            ]}
          >
            <Input placeholder="Email" allowClear />
          </Form.Item>
          <Form.Item
            name={['user', 'password']}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            name={['user', 'confirmpassword']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('user').password === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!'
                    )
                  )
                },
              }),
            ]}
          >
            <Input.Password type="password" placeholder="Confirm Password" />
          </Form.Item>
          <Form.Item>
            <Button
              className="btn-success-dp btn-block btn-login"
              htmlType="submit"
            >
              Create Account
            </Button>
            <div className="d-grid">
              <button className="btn btn-primary" type="button">
                <Image
                  src={fbicon}
                  width={20}
                  height={20}
                  className="me-3"
                  alt={''}
                />
                Sign In with Facebook
              </button>
            </div>
            <div className="d-grid my-3">
              <button className="btn btn-light" type="button">
                <Image
                  src={googleIcon}
                  width={20}
                  height={20}
                  className="me-4"
                  alt={''}
                />{' '}
                Sign In with Google
              </button>
            </div>
            <div className="d-flex py-3">
              <small className="pt-2">Already have an account?</small>
              <Button type="link" htmlType="button">
                Sign in
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </MainLayout>
  )
}

export default login
