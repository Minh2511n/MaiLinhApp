import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Form, Input, Button, Select, DatePicker, InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

class AddKM extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        MaKhuyenMai: "",    
        TenKhuyenMai: "",   
        MoTa: "",            
        NgayBatDau: null,    
        NgayKetThuc: null,  
        SoLanDung: null,    
        MucGiamGia: null,   
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
    this.imageInputRef.click();
  };

  handleImageInputChange = (e) => {
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
        <HeaderContent title="Add Khuyến Mãi" navigate={navigate} />
        <Form onFinish={this.handleSubmit}>
          <Form.Item label="Mã Khuyến Mãi">
            <Input
              name="MaKhuyenMai"
              value={this.state.formData.MaKhuyenMai}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Tên Khuyến Mãi">
            <Input
              name="TenKhuyenMai"
              value={this.state.formData.TenKhuyenMai}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Mô Tả">
            <Input
              name="MoTa"
              value={this.state.formData.MoTa}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Ngày Bắt Đầu">
            <DatePicker
              name="NgayBatDau"
              value={this.state.formData.NgayBatDau}
              onChange={(value) => this.handleDateChange(value, "NgayBatDau")}
            />
          </Form.Item>
          <Form.Item label="Ngày Kết Thúc">
            <DatePicker
              name="NgayKetThuc"
              value={this.state.formData.NgayKetThuc}
              onChange={(value) => this.handleDateChange(value, "NgayKetThuc")}
            />
          </Form.Item>
          <Form.Item label="Số Lần Dùng">
            <InputNumber
              name="SoLanDung"
              value={this.state.formData.SoLanDung}
              onChange={(value) => this.handleSelectChange(value, "SoLanDung")}
            />
          </Form.Item>
          <Form.Item label="Mức Giảm Giá">
            <InputNumber
              name="MucGiamGia"
              value={this.state.formData.MucGiamGia}
              onChange={(value) => this.handleSelectChange(value, "MucGiamGia")}
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

export default withRouter(AddKM);
