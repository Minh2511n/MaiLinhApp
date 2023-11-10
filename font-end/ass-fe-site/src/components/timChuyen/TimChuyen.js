import React, { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Thêm CSS cho Carousel
import { Button, Col, Tabs } from "antd";
import "antd/dist/antd.css";
import MotChieu from "./MotChieu";
import KhuHoi from "./KhuHoi";
import withRouter from "../../helpers/withRouter";
import '../../css/routes.scss';
function TimChuyen(props) {
  const { navigate } = props.router;
  const onClick = () => {
    navigate("/timchuyen");
  };
  const data = [
    {
      value: "jack",
      label: "Jack",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
    {
      value: "disabled",
      label: "Disabled",
      disabled: true,
    },
  ];
  const items = [
    {
      key: "1",
      label: "Một chiều",
      children: <MotChieu data={data} />,
    },
    {
      key: "2",
      label: "Khứ hồi",
      children: <KhuHoi data={data} />,
    },
  ];
  return (
    <>
      <Col>
        <Tabs defaultActiveKey="1" items={items} />
        <Button className="tcx-button" onClick={onClick}>
        Tìm chuyến xe
      </Button>
      </Col>
      
    </>
  );
}

export default withRouter(TimChuyen);
