import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Table, Space, Button, Tag, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BiEdit, BiSolidTrash } from "react-icons/bi";

class ListVehicleTypes extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        {
          MaLoai: "1",
          SoGhe: "40",
          LoaiGhe: "Ghế",
        },
        {
          MaLoai: "2",
          SoGhe: "20",
          LoaiGhe: "GiuongNam",
        },
        {
          MaLoai: "3",
          SoGhe: "32",
          LoaiGhe: "Ghế",
        },
        {
          MaLoai: "4",
          SoGhe: "16",
          LoaiGhe: "GiuongNam",
        },
      ],
      selectedRowKeys: [], // Chọn các hàng trong bảng
    };
  }

  editVehicleType = (record) => {
    console.log(record);
    // Thêm mã loại xe vào URL để chỉnh sửa loại xe cụ thể
    this.props.router.navigate(`//${record.MaLoai}`);
  };

  openDeleteModal = (record) => {
    const message = "Do you want to delete the vehicle type with MaLoai " + record.MaLoai;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => this.deleteVehicleType(record.MaLoai),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  deleteVehicleType = (maLoai) => {
    // Thêm mã loại xe vào URL để xóa loại xe cụ thể
    console.log("Delete vehicle type with MaLoai:", maLoai);
  };

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { navigate } = this.props.router;

    const columns = [
      {
        title: "Mã Loại",
        dataIndex: "MaLoai",
        key: "MaLoai",
      },
      {
        title: "Số Ghế",
        dataIndex: "SoGhe",
        key: "SoGhe",
      },
      {
        title: "Loại Ghế",
        dataIndex: "LoaiGhe",
        key: "LoaiGhe",
        render: (text) => (
          <Tag color={text === "Ghế" ? "green" : "volcano"}>{text}</Tag>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Button
              type="primary"
              size="small"
              onClick={() => this.editVehicleType(record)}
            >
              <BiEdit /> Edit
            </Button>
            <Button
              type="danger"
              size="small"
              onClick={() => this.openDeleteModal(record)}
            >
              <BiSolidTrash /> Delete
            </Button>
          </Space>
        ),
      },
    ];

    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div>
        <HeaderContent title="List Vehicle Types" navigate={navigate} />

        <Table
          dataSource={this.state.dataSource}
          rowKey="MaLoai"
          columns={columns}
          rowSelection={rowSelection}
        />
      </div>
    );
  }
}

export default withRouter(ListVehicleTypes);
