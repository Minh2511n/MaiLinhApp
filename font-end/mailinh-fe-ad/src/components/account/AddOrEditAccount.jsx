import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import HeaderContent from "../common/HeaderContent";
const { Option } = Select;

class AddOrEditAccount extends Component {
  onSubmitForm = (values) => {
    console.log(values);
  };

  render() {
    const { navigate } = this.props.router;
    return (
      <div>
        <HeaderContent title="Add Accounts" navigate={navigate} />
        <Form onFinish={this.onSubmitForm} layout="vertical">
          <Form.Item name="username" label="Tài khoản" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="fullName" label="Họ và Tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="roles" label="Vai trò" rules={[{ required: true }]}>
            <Select mode="multiple" placeholder="Chọn vai trò">
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm Người Dùng
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddOrEditAccount);
