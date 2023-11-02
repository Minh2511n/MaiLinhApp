import React, { Component } from "react";
import { Table, Space, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BiEdit, BiTrash } from "react-icons/bi";

class ListKM extends Component {
  constructor() {
    super();
    this.state = {
      promotions: [
        {
          MaKhuyenMai: "KM001",
          TenKhuyenMai: "Giảm giá 10%",
          MoTa: "Khuyến mãi giảm giá 10% cho mua hàng trên 500,000 VNĐ",
          NgayBatDau: "2023-10-01",
          NgayKetThuc: "2023-10-15",
          SoLanDung: 2,
          MucGiamGia: 10,
        },
        {
          MaKhuyenMai: "KM002",
          TenKhuyenMai: "Mua 1 tặng 1",
          MoTa: "Mua 1 sản phẩm, tặng 1 sản phẩm cùng loại",
          NgayBatDau: "2023-10-05",
          NgayKetThuc: "2023-10-20",
          SoLanDung: 3,
          MucGiamGia: 100,
        },
        // Thêm các dòng dữ liệu khác tại đây
      ],
    };
  }

  editPromotion = (promotion) => {
    console.log("Edit promotion with MaKhuyenMai:", promotion.MaKhuyenMai);
    // Thực hiện điều hướng đến trang chỉnh sửa khuyến mãi với promotion là dữ liệu để chỉnh sửa
  };

  openDeleteModal = (promotion) => {
    const message = "Do you want to delete the promotion with MaKhuyenMai " + promotion.MaKhuyenMai;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => this.deletePromotion(promotion.MaKhuyenMai),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  deletePromotion = (maKhuyenMai) => {
    // Thực hiện xóa khuyến mãi với MaKhuyenMai cụ thể
    console.log("Delete promotion with MaKhuyenMai:", maKhuyenMai);
  };

  render() {
    const columns = [
      {
        title: "Mã Khuyến Mãi",
        dataIndex: "MaKhuyenMai",
        key: "MaKhuyenMai",
      },
      {
        title: "Tên Khuyến Mãi",
        dataIndex: "TenKhuyenMai",
        key: "TenKhuyenMai",
      },
      {
        title: "Mô Tả",
        dataIndex: "MoTa",
        key: "MoTa",
      },
      {
        title: "Ngày Bắt Đầu",
        dataIndex: "NgayBatDau",
        key: "NgayBatDau",
      },
      {
        title: "Ngày Kết Thúc",
        dataIndex: "NgayKetThuc",
        key: "NgayKetThuc",
      },
      {
        title: "Số Lần Dùng",
        dataIndex: "SoLanDung",
        key: "SoLanDung",
      },
      {
        title: "Mức Giảm Giá (%)",
        dataIndex: "MucGiamGia",
        key: "MucGiamGia",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Button type="primary" size="small" onClick={() => this.editPromotion(record)}>
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
        <Table
          dataSource={this.state.promotions}
          rowKey="MaKhuyenMai"
          columns={columns}
        />
      </div>
    );
  }
}

export default ListKM;
