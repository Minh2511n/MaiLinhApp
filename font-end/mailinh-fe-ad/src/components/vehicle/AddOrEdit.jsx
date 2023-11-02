import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

class AddVehicleType extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        MaLoai: "",
        TenLoaiXe: "",  // Mã loại xe (chỉ đọc)
        SoGhe: "", // Số ghế
        LoaiGhe: "Ghe", // Loại ghế (mặc định là Ghế)
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

  handleLoaiGheChange = (value) => {
    this.setState({
      formData: {
        ...this.state.formData,
        LoaiGhe: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add code to submit the form data to the server or perform other actions here
    console.log("Form data:", this.state.formData);
  };

  render() {
    const { navigate } = this.props.router;
    return (
      <div>
        <HeaderContent title="Add Vehicle Type" navigate={navigate} />
        <Form onFinish={this.handleSubmit}>
          <Form.Item label="Mã Loại">
            <Input
              name="MaLoai"
              value={this.state.formData.MaLoai}
              readOnly // Chỉ đọc
            />
          </Form.Item>
          <Form.Item label="Loại xe">
            <Input
              name="TenLoaiXe"
              value={this.state.formData.TenLoaiXe}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Số Ghế">
            <Input
              type="number"
              name="SoGhe"
              value={this.state.formData.SoGhe}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Loại Ghế">
            <Select
              name="LoaiGhe"
              value={this.state.formData.LoaiGhe}
              onChange={this.handleLoaiGheChange}
            >
              <Option value="Ghe">Ghế</Option>
              <Option value="GiuongNam">Gường Nằm</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm Loại Xe
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddVehicleType);
