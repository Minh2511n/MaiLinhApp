import React, { useState, useEffect } from 'react';
import '../css/navbar.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
import logo from '../image/Mailinhlogo.png';
import vn from '../image/vietnam.svg';
import dow from '../image/download_app.svg';

function Navbar() {
  
  useEffect(() => {
    document.title = 'Trang chủ';

    return () => {
      document.title = 'Tiêu đề mặc định';
    };
  }, []);

  return (
    <nav className="navbar-container">
   
      <ul id="navbar">
   
      <li className="logo">
        <img src={logo}  alt="brand"/>
      </li>
      
        <li><a className="active" href="demo">Trang chủ</a></li>
        <li><a href="lichtrinh">Lịch Trình</a></li>
        <li><a href="">Tra cứu vé</a></li>
        <li><a href="#">Tin Tức</a></li>
        <li><a href="">Hóa Đơn</a></li>
        <li><a href="/lienhe">Liên Hệ</a></li>
        <li><a href="/login">Đăng nhập</a></li>
      </ul>      
    </nav>
    
  );
  
}

export default Navbar;
