import React from 'react';
import '../css/footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Liên Hệ</h4>
            <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP HCM</p>
            <p>Email: example@example.com</p>
            <p>Số điện thoại: +84 123 456 789</p>
          </div>
          <div className="footer-section">
            <h4>Thông Tin</h4>
            <ul>
              <li><a href="#">Giới Thiệu</a></li>
              <li><a href="#">Chính Sách Bảo Mật</a></li>
              <li><a href="#">Điều Khoản Sử Dụng</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Chăm Sóc Khách Hàng</h4>
            <ul>
              <li><a href="#">Hỗ Trợ Trực Tuyến</a></li>
              <li><a href="#">Hướng Dẫn Đặt Vé</a></li>
              <li><a href="#">Câu Hỏi Thường Gặp</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kết Nối Với Chúng Tôi</h4>
            <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2023 | Bản quyền thuộc về Công ty Cổ Phần Xe khách Phương Trang - FUTA Bus Lines 2023</p>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
