import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

class AddCar extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        BienSoXe: "",
        MaThuongHieu: "",
        MaLoai: "",
        AnhChinh: "",
        Anh: [],
        SoLuongGhe: null,
        NoiMuaXe: "",
        TrangThaiXe: "",
        NamSanXuat: null,
        NgayDangKiem: null,
        NgayMuaXe: null,
        GiaMuaXe: null,
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleSelectChange = (value, name) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleDateChange = (value, name) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleImageSelectClick = () => {
    // Khi nút "Chọn Ảnh" được nhấn, kích hoạt input type=file ẩn
    this.imageInputRef.click();
  };

  handleImageInputChange = (e) => {
    // Xử lý khi tệp ảnh được chọn
    const fileList = Array.from(e.target.files);
    this.setState({
      formData: {
        ...this.state.formData,
        Anh: fileList,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", this.state.formData);
  };

  render() {
    const { navigate } = this.props.router;

    return (
      <div>
        <HeaderContent title="Add Car" navigate={navigate} />

        <Form onFinish={this.handleSubmit}>
          <Form.Item label="Biển Số Xe">
            <Input
              name="BienSoXe"
              value={this.state.formData.BienSoXe}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Mã Thương Hiệu">
            <Select
              name="MaThuongHieu"
              value={this.state.formData.MaThuongHieu}
              onChange={(value) => this.handleSelectChange(value, "MaThuongHieu")}
            >
              <Option value="1">Toyota</Option>
              <Option value="2">Honda</Option>
              <Option value="3">Ford</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mã Loại">
            <Select
              name="MaLoai"
              value={this.state.formData.MaLoai}
              onChange={(value) => this.handleSelectChange(value, "MaLoai")}
            >
              <Option value="1">Loại 1</Option>
              <Option value="2">Loại 2</Option>
              <Option value="3">Loại 3</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Ảnh Chính">
            <input
              type="file"
              ref={(input) => (this.imageInputRef = input)}
              accept="image/*"
              style={{ display: "none" }}
              onChange={this.handleImageInputChange}
            />
            <Button type="dashed" style={{ width: '100%' }} onClick={this.handleImageSelectClick}>
              <PlusOutlined /> Chọn Ảnh Chính
            </Button>
          </Form.Item>
          <Form.Item label="Ảnh">
            <input
              type="file"
              multiple
              accept="image/*"
              style={{ display: "none" }}
              onChange={this.handleImageInputChange}
            />
            <Button type="dashed" style={{ width: '100%' }} onClick={this.handleImageSelectClick}>
              <PlusOutlined /> Chọn Ảnh
            </Button>
          </Form.Item>
          <Form.Item label="Số Lượng Ghế">
            <InputNumber
              name="SoLuongGhe"
              value={this.state.formData.SoLuongGhe}
              onChange={(value) => this.handleSelectChange(value, "SoLuongGhe")}
            />
          </Form.Item>
          <Form.Item label="Nơi Mua Xe">
            <Input
              name="NoiMuaXe"
              value={this.state.formData.NoiMuaXe}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Trạng Thái Xe">
            <Input
              name="TrangThaiXe"
              value={this.state.formData.TrangThaiXe}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Năm Sản Xuất">
            <InputNumber
              name="NamSanXuat"
              value={this.state.formData.NamSanXuat}
              onChange={(value) => this.handleSelectChange(value, "NamSanXuat")}
            />
          </Form.Item>
          <Form.Item label="Ngày Đăng Kiểm">
            <DatePicker
              name="NgayDangKiem"
              value={this.state.formData.NgayDangKiem}
              onChange={(value) => this.handleDateChange(value, "NgayDangKiem")}
            />
          </Form.Item>
          <Form.Item label="Ngày Mua Xe">
            <DatePicker
              name="NgayMuaXe"
              value={this.state.formData.NgayMuaXe}
              onChange={(value) => this.handleDateChange(value, "NgayMuaXe")}
            />
          </Form.Item>
          <Form.Item label="Giá Mua Xe">
            <InputNumber
              name="GiaMuaXe"
              value={this.state.formData.GiaMuaXe}
              onChange={(value) => this.handleSelectChange(value, "GiaMuaXe")}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm Xe
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddCar);
