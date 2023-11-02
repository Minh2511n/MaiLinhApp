import React, { useState } from "react";
import {
  MdAddCircleOutline,
  MdAllInbox,
  MdCategory,
  MdFormatListBulleted,
  MdHome,
  MdLogout,
  MdManageAccounts,
  MdRequestPage,
  MdStackedBarChart,
  MdSupervisorAccount,
} from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, theme, Avatar, Space, Row, Col } from "antd";
import "../styles/Dashboard.scss";
import Home from "../components/home/Home";
import AddOrEdit from "../components/vehicle/AddOrEdit";
import AddAccount from "../components/account/AddOrEditAccount";
import ListAccount from "../components/account/ListAccount";
import ListCategory from "../components/vehicle/ListCategory";
import AddCar from "../components/car/AddCar";
import AddKM from "../components/makhuyenmai/addkhuyenmai";
import ListKM from "../components/makhuyenmai/ListKm";
import ListCar from "../components/car/ListCar";
import AddTX from "../components/Buses/Addtuyenxe";
import ListTX from "../components/Buses/Listtuyenxe";

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginleft] = useState(200);
  const [fontSize, setSizefont] = useState(16);

  const navigate = useNavigate();

  const siteLayoutStyle = { marginLeft: marginLeft };
  const iconSize = { fontSize: fontSize };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={siteLayoutStyle}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2>{collapsed ? "ML" : "MaiLinhTour"}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={iconSize}
          items={[
            {
              key: "1",
              icon: <MdHome />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <MdCategory />,
              label: "Loại xe ",
              children: [
                {
                  key: "21",
                  icon: <MdAddCircleOutline />,
                  label: "Add Vehicle",
                  onClick: () => navigate("/vehicle/add"),
                },
                {
                  key: "22",
                  icon: <MdFormatListBulleted />,
                  label: "List Vehicle",
                  onClick: () => navigate("/vehicle/list"),
                },
              ],
            },
            {
              key: "3",
              icon: <MdAllInbox />,
              label: "Xe",
              children: [
                {
                  key: "23",
                  icon: <MdAddCircleOutline />,
                  label: "Add Car",
                  onClick: () => navigate("/car/add"),
                
                },
                {
                  key: "24",
                  icon: <MdFormatListBulleted />,
                  label: "List Cars",
                  onClick: () => navigate("/car/list"),
                },
              ],
            },
            {
              key: "31",
              icon: <MdAllInbox />,
              label: "Khuyến Mãi",
              children: [
                {
                  key: "25",
                  icon: <MdAddCircleOutline />,
                  label: "Add Khuyến mãi",
                  onClick: () => navigate("/km/add"),
                
                },
                {
                  key: "26",
                  icon: <MdFormatListBulleted />,
                  label: "List Khuyến mãi",
                  onClick: () => navigate("/km/list"),
                },
              ],
            },
            
            {
              key: "4",
              icon: <AiFillCreditCard />,
              label: "Orders",
            },
            {
              key: "41",
              icon: <AiFillCreditCard />,
              label: "Tuyến xe",
              children: [
                {
                  key: "27",
                  icon: <MdAddCircleOutline />,
                  label: "Add Tuyễn Xe",
                  onClick: () => navigate("/tuyenxe/add"),
                },
                {
                  key: "28",
                  icon: <MdFormatListBulleted />,
                  label: "List Tuyến Xe",
                  onClick: () => navigate("/tuyenxe/list"),
                },
              ],
            },
            {
              key: "5",
              icon: <MdRequestPage />,
              label: "Invoices",
            },
            {
              key: "6",
              icon: <MdStackedBarChart />,
              label: "Statistical",
              
            },
            {
              key: "7",
              icon: <MdManageAccounts />,
              label: "Profiles",
            },
            {
              key: "8",
              icon: <MdSupervisorAccount />,
              label: "Accounts",
              children: [
                {
                  key: "27",
                  icon: <MdAddCircleOutline />,
                  label: "Add Account",
                  onClick: () => navigate("/acconut/add"),
                },
                {
                  key: "28",
                  icon: <MdFormatListBulleted />,
                  label: "List Accounts",
                  onClick: () => navigate("/account/list"),
                },
              ],
            },
            {
              key: "9",
              icon: <MdLogout />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            left: marginLeft + 16,
          }}
        >
          <Row>
            <Col md={18}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  const sts = !collapsed;
                  setCollapsed(sts);
                  setMarginleft(sts ? 80 : 200);
                  setSizefont(sts ? 20 : 16);
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <Space size={16}>
                <Avatar icon={<UserOutlined />}></Avatar>admin
              </Space>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className="content-panel">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vehicle/add" element={<AddOrEdit />} />
              <Route path="/vehicle/list" element={<ListCategory />} />
              <Route path="/acconut/add" element={<AddAccount />} />
              <Route path="/account/list" element={<ListAccount />} />
              <Route path="/car/add" element={<AddCar />} />
              <Route path="/car/list" element={<ListCar />} />
              <Route path="/km/add" element={<AddKM />} />
              <Route path="/km/list" element={<ListKM />} />
              <Route path="/tuyenxe/add" element={<AddTX />} />
              <Route path="/tuyenxe/list" element={<ListTX />} />
            
            </Routes>
          </div>

          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
