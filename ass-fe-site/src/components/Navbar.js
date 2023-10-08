import React from 'react';
import logo from"../image/favicon.ico"

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
        <img src={logo} className="img-fluid logo" alt="brand" />
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a className="navbar-link" href="#">Trang chủ</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="/lienhe">Về chúng tôi</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="#">Dịch vụ</a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link" href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
