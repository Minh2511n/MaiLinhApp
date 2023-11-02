import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Button, Modal, Space, Table, Tag} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BiEdit, BiSolidTrash } from "react-icons/bi";
import Column from "antd/es/table/Column";

class ListAccount extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        {
          userId: 1,
          username: "user1",
          fullName: "User One",
          email: "user1@example.com",
          roles: ["Admin"],
        },
        {
          userId: 2,
          username: "user2",
          fullName: "User Two",
          email: "user2@example.com",
          roles: ["User"],
        },
        {
          userId: 3,
          username: "user3",
          fullName: "User Three",
          email: "user3@example.com",
          roles: ["Admin"],
        },
        // Add more user data as needed
      ],
      user: {},
    };
  }

  editUser = (data) => {
    console.log(data);
    // Add code to edit the user here
  };

  openDeleteModal = (data) => {
    this.setState({ ...this.state, user: data });

    console.log(data);

    const message = "Do you want to delete the user " + data.username;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteUser,
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  deleteUser = () => {
    console.log(this.state.user);
    // Add code to delete the user here
  };

  render() {
    const { navigate } = this.props.router;
    return (
      <div>
        <HeaderContent title="List Account" navigate={navigate} />

        <Table dataSource={this.state.dataSource} rowKey="userId">
          <Column title="User ID" dataIndex="userId" key="userId" align="center" width={40} />
          <Column title="Username" dataIndex="username" key="username" align="center" />
          <Column title="Full Name" dataIndex="fullName" key="fullName" align="center" />
          <Column title="Email" dataIndex="email" key="email" align="center" />
          <Column
            title="Roles"
            dataIndex="roles"
            key="roles"
            align="center"
            render={(roles) => (
              <span>
                {roles.map((role) => (
                  <Tag color="blue" key={role}>
                    {role}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            align="center"
            width={200}
            render={(_, record) => (
              <Space size="middle">
                <Button
                  key={record.key}
                  type="primary"
                  size="small"
                  onClick={() => this.editUser(record)}
                >
                  <BiEdit /> Edit
                </Button>
                <Button
                  key={record.key}
                  type="primary"
                  danger
                  size="small"
                  onClick={() => this.openDeleteModal(record)}
                >
                  <BiSolidTrash /> Delete
                </Button>
              </Space>
            )}
          />
        </Table>
      </div>
    );
  }
}

export default withRouter(ListAccount);
