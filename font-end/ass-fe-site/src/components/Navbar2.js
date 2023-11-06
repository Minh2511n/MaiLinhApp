import React, { useState, useEffect } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import logo from "../image/Mailinhlogo.png";
import { NavLink } from "react-router-dom";
import { FaUser, FaHistory, FaCog, FaWrench } from "react-icons/fa";
import history from "../image/dangnhap/History.svg";
import address from "../image/dangnhap/Address.svg";
import pass from "../image/dangnhap/Password.svg";
import pro from "../image/dangnhap/Profile.svg";
import futa from "../image/dangnhap/futaPay.svg";
import log from "../image/dangnhap/Logout.svg";

function Navbar({ page }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.title = "Mai Linh TOUR";
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar-container">
      <ul id="navbar">
        <li className="logo">
          <img src={logo} alt="brand" />
        </li>

        <li>
          <NavLink
            to="/"
            activeClassName="active"
            style={{ marginLeft: "-1.5cm" }}
          >
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/lichtrinh" activeClassName="active">
            Lịch Trình
          </NavLink>
        </li>
        <li>
          <NavLink to="/tracuu" activeClassName="active">
            Tra cứu vé
          </NavLink>
        </li>
        <li>
          <NavLink to="/tintuc" activeClassName="active">
            Tin Tức
          </NavLink>
        </li>
        <li>
          <NavLink to="/hoadon" activeClassName="active">
            Hóa Đơn
          </NavLink>
        </li>
        <li>
          <NavLink to="/lienhe" activeClassName="active">
            Liên Hệ
          </NavLink>
        </li>
        <li>
          <NavLink to="/vechungtoi" activeClassName="active">
            Về Chúng Tôi
          </NavLink>
        </li>
        <li className="dropdown-container" onClick={toggleDropdown}>
          <NavLink to="/login" activeClassName="active">
            Đăng nhập
          </NavLink>
          {isDropdownOpen && (
            <div className="dropdown">
              <NavLink exact to="/Mailinhpay">
                <img src={futa} alt="MAILINHPay" /> MAILINHPay
              </NavLink>
              <NavLink exact to="/thongttk">
                <img src={pro} alt="Thông tin tài khoản" /> Thông tin tài khoản
              </NavLink>
              <NavLink exact to="/Lsmuave">
                <img src={history} alt="Lịch sử mua vé" /> Lịch sử mua vé
              </NavLink>
              <NavLink exact to="#">
                <img src={address} alt="Địa chỉ mua vé" /> Địa chỉ mua vé
              </NavLink>
              <NavLink exact to="/doimk">
                <img src={pass} alt="Đặt lại mật khẩu" /> Đặt lại mật khẩu
              </NavLink>
              <NavLink exact to="#">
                <img src={log} alt="Đăng xuất" /> Đăng xuất
              </NavLink>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
