import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Table, Space, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BiEdit, BiTrash } from "react-icons/bi";

class ListTuyenXe extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        {
          MaTuyenXe: "TX001",
          TenTuyen: "Tuyến Xe 1",
          ThoiGianKhoiHanh: "2023-11-01",
          ThoiGianKetThuc: "2023-11-30",
          DiemDau: "Hà Nội",
          DiemCuoi: "Sài Gòn",
          GiaVe: 500000,
        },
        {
          MaTuyenXe: "TX002",
          TenTuyen: "Tuyến Xe 2",
          ThoiGianKhoiHanh: "2023-12-01",
          ThoiGianKetThuc: "2023-12-31",
          DiemDau: "Hà Nội",
          DiemCuoi: "Đà Nẵng",
          GiaVe: 450000,
        },
        // Thêm các dòng dữ liệu khác tại đây
      ],
    };
  }

  editTuyenXe = (record) => {
    console.log("Edit tuyến xe with MaTuyenXe:", record.MaTuyenXe);
    const { navigate } = this.props.router;
    navigate(`/tuyenxe/edit/${record.MaTuyenXe}`);
  };

  openDeleteModal = (record) => {
    const message = "Do you want to delete the tuyến xe with MaTuyenXe " + record.MaTuyenXe;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => this.deleteTuyenXe(record.MaTuyenXe),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  deleteTuyenXe = (maTuyenXe) => {
    // Thực hiện xóa tuyến xe với MaTuyenXe cụ thể
    console.log("Delete tuyến xe with MaTuyenXe:", maTuyenXe);
  };

  render() {
    const { navigate } = this.props.router;

    const columns = [
      {
        title: "Mã Tuyến Xe",
        dataIndex: "MaTuyenXe",
        key: "MaTuyenXe",
      },
      {
        title: "Tên Tuyến",
        dataIndex: "TenTuyen",
        key: "TenTuyen",
      },
      {
        title: "Thời Gian Khởi Hành",
        dataIndex: "ThoiGianKhoiHanh",
        key: "ThoiGianKhoiHanh",
      },
      {
        title: "Thời Gian Kết Thúc",
        dataIndex: "ThoiGianKetThuc",
        key: "ThoiGianKetThuc",
      },
      {
        title: "Điểm Đầu",
        dataIndex: "DiemDau",
        key: "DiemDau",
      },
      {
        title: "Điểm Cuối",
        dataIndex: "DiemCuoi",
        key: "DiemCuoi",
      },
      {
        title: "Giá Vé",
        dataIndex: "GiaVe",
        key: "GiaVe",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Button type="primary" size="small" onClick={() => this.editTuyenXe(record)}>
              <BiEdit /> Edit
            </Button>
            <Button type="danger" size="small" onClick={() => this.openDeleteModal(record)}>
              <BiTrash /> Delete
            </Button>
          </Space>
        ),
      },
    ];

    return (
      <div>
        <HeaderContent title="List Tuyến Xe" navigate={navigate} />

        <Table dataSource={this.state.dataSource} rowKey="MaTuyenXe" columns={columns} />
      </div>
    );
  }
}

export default withRouter(ListTuyenXe);
