import { Checkbox, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { IoClipboard, IoClipboardOutline } from "react-icons/io5";
import "../../css/ChonCho.css";

const ChonCho = () => {
  const [data, setData] = useState([]);
  const dis = [5, 7, 9];

  const onChange = (values) => {
    if (data && data.length > 0) {
      console.log(values);
      const updatedData = data.map((item) => {
        if (values.includes(item.key) || dis.includes(item.key)) {
          return { ...item, label: <IoClipboard /> };
        } else {
          return { ...item, label: <IoClipboardOutline /> };
        }
      });
      setData(updatedData);
    }
  };

  const createData = () => {
    let num = 10;
    const dataCreate = [];
    for (let i = 1; i <= num; i++) {
      dataCreate.push({
        label: <IoClipboardOutline />,
        value: i,
        key: i,
        disabled: false,
      });
    }
    const newData = dataCreate.map((item) => {
      if (dis.includes(item.value)) {
        return { ...item, label: <IoClipboard />, disabled: true };
      }
      return item;
    });
    setData(newData);
  };

  useEffect(() => {
    createData();
  }, []);

  return (
    <Row>
      <Col md={8}></Col>
      <Col md={8}>
        <label>Tầng dưới</label> <br />
        <Checkbox.Group
          options={data.filter((item) => item.key <= data.length / 2)}
          onChange={onChange}
        />
      </Col>
      <Col md={8}>
        <label>Tầng trên</label> <br />
        <Checkbox.Group
          options={data.filter((item) => item.key > data.length / 2)}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
export default ChonCho;
