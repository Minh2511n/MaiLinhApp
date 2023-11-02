import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Table, Space, Button, Modal, Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { BiEdit, BiTrash } from "react-icons/bi";

class ListCars extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        {
          BienSoXe: "ABC 123",
          MaThuongHieu: "1",
          MaLoai: "2",
          AnhChinh: "main-image.jpg",
          Anh: ["image1.jpg", "image2.jpg", "image3.jpg"],
          SoLuongGhe: 40,
          NoiMuaXe: "Hà Nội",
          TrangThaiXe: "Sẵn sàng",
          NamSanXuat: 2022,
          NgayDangKiem: "2023-10-15",
          NgayMuaXe: "2023-10-01",
          GiaMuaXe: 50000,
        },
        {
          BienSoXe: "ABC 1234",
          MaThuongHieu: "2",
          MaLoai: "2",
          AnhChinh: "main-image.jpg",
          Anh: ["image1.jpg", "image2.jpg", "image3.jpg"],
          SoLuongGhe: 40,
          NoiMuaXe: "Hà Nội",
          TrangThaiXe: "Sẵn sàng",
          NamSanXuat: 2022,
          NgayDangKiem: "2023-10-15",
          NgayMuaXe: "2023-10-01",
          GiaMuaXe: 50000,
        },
        {
          BienSoXe: "ABC 1235",
          MaThuongHieu: "3",
          MaLoai: "2",
          AnhChinh: "main-image.jpg",
          Anh: ["image1.jpg", "image2.jpg", "image3.jpg"],
          SoLuongGhe: 40,
          NoiMuaXe: "Hà Nội",
          TrangThaiXe: "Sẵn sàng",
          NamSanXuat: 2022,
          NgayDangKiem: "2023-10-15",
          NgayMuaXe: "2023-10-01",
          GiaMuaXe: 50000,
        },
        // Thêm các dòng dữ liệu khác tại đây
      ],
    };
  }

  editCar = (record) => {
    console.log("Edit car with BienSoXe:", record.BienSoXe);
    const {navigate} = this.props.router;
    navigate('/car/add')
    
  };

  openDeleteModal = (record) => {
    const message = "Do you want to delete the car with BienSoXe " + record.BienSoXe;

    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: () => this.deleteCar(record.BienSoXe),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  deleteCar = (bienSoXe) => {
    // Thực hiện xóa xe với BienSoXe cụ thể
    console.log("Delete car with BienSoXe:", bienSoXe);
  };

  render() {
    const { navigate } = this.props.router;

    const columns = [
      {
        title: "Biển Số Xe",
        dataIndex: "BienSoXe",
        key: "BienSoXe",
      },
      {
        title: "Hãng Xe",
        dataIndex: "MaThuongHieu",
        key: "MaThuongHieu",
      },
      {
        title: "Loại Xe",
        dataIndex: "MaLoai",
        key: "MaLoai",
      },
      {
        title: "Ảnh Chính",
        dataIndex: "AnhChinh",
        key: "AnhChinh",
        render: (text) => (
          <img src={text} alt="Main" style={{ maxWidth: "100px" }} />
        ),
      },
      {
        title: "Số Lượng Ghế",
        dataIndex: "SoLuongGhe",
        key: "SoLuongGhe",
      },
      {
        title: "Trạng Thái Xe",
        dataIndex: "TrangThaiXe",
        key: "TrangThaiXe",
        render: (text) => (
          <Tag color={text === "Sẵn sàng" ? "green" : "volcano"}>{text}</Tag>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <Space size="middle">
            <Button type="primary" size="small" onClick={() => this.editCar(record)}>
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
        <HeaderContent title="List Cars" navigate={navigate} />

        <Table
          dataSource={this.state.dataSource}
          rowKey="BienSoXe"
          columns={columns}
        />
      </div>
    );
  }
}

export default withRouter(ListCars);
