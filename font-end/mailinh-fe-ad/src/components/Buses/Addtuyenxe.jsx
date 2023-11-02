import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import HeaderContent from "../common/HeaderContent";
import { Form, Input, Button, DatePicker, InputNumber } from "antd";

class AddTuyenXe extends Component {
  constructor() {
    super();
    this.state = {
      formData: {
        MaTuyenXe: "",
        TenTuyen: "",
        ThoiGianKhoiHanh: null,
        ThoiGianKetThuc: null,
        DiemDau: "",
        DiemCuoi: "",
        GiaVe: null,
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

  handleDateChange = (value, name) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
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
        <HeaderContent title="Add Tuyến Xe" navigate={navigate} />
        <Form onFinish={this.handleSubmit}>
          <Form.Item label="Mã Tuyến Xe">
            <Input
              name="MaTuyenXe"
              value={this.state.formData.MaTuyenXe}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Tên Tuyến">
            <Input
              name="TenTuyen"
              value={this.state.formData.TenTuyen}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Thời Gian Khởi Hành">
            <DatePicker
            showTime
              name="ThoiGianKhoiHanh"
              value={this.state.formData.ThoiGianKhoiHanh}
              onChange={(value) =>
                this.handleDateChange(value, "ThoiGianKhoiHanh")
              }
            />
          </Form.Item>
          <Form.Item label="Thời Gian Kết Thúc">
            <DatePicker
            showTime
              name="ThoiGianKetThuc"
              value={this.state.formData.ThoiGianKetThuc}
              onChange={(value) =>
                this.handleDateChange(value, "ThoiGianKetThuc")
              }
            />
          </Form.Item>
          <Form.Item label="Điểm Đầu">
            <Input
              name="DiemDau"
              value={this.state.formData.DiemDau}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Điểm Cuối">
            <Input
              name="DiemCuoi"
              value={this.state.formData.DiemCuoi}
              onChange={this.handleInputChange}
            />
          </Form.Item>
          <Form.Item label="Giá Vé">
            <InputNumber
              name="GiaVe"
              value={this.state.formData.GiaVe}
              onChange={(value) => this.handleInputChange(value, "GiaVe")}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm Tuyến Xe
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddTuyenXe);
