import React, { useState } from "react";
import { Row, Steps, Col, Divider, Button } from "antd";
import ChonCho from "./ChonCho";
import ChonDiemTra from "./ChonDiemTra";
import ThongTinForm from "./ThongTinForm";

const DatVeForm = (props) => {
  const [steps, setSteps] = useState(0);

  const onNext = () => {
    setSteps(steps + 1);
  };

  const onPrev = () => {
    setSteps(steps - 1);
  };

  const onClose = () => {
    props.onClose();
  };

  return (
    <>
      <Row>
        <Col md={24}>
          <Steps
            current={steps}
            items={[
              {
                title: "Chỗ mong muốn",
              },
              {
                title: "Điểm đón trả",
              },
              {
                title: "Nhập thông tin",
              },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          {steps === 0 && <ChonCho />}
          {steps === 1 && <ChonDiemTra />}
          {steps === 2 && <ThongTinForm />}
        </Col>
      </Row>
      <Divider />
      <Row style={{ float: "right" }}>
        {steps < 2 && (
          <Button type="primary" onClick={() => onNext()}>
            Tiếp tục
          </Button>
        )}
        {steps === 2 && <Button type="primary">Thanh toán</Button>}
        {steps > 0 && (
          <Button
            type="primary"
            style={{ margin: "0 8px" }}
            onClick={() => onPrev()}
          >
            Trở lại
          </Button>
        )}
        {steps === 0 && (
          <Button type="primary" style={{ margin: "0 8px" }} onClick={onClose}>
            Hủy
          </Button>
        )}
      </Row>
    </>
  );
};
export default DatVeForm;
