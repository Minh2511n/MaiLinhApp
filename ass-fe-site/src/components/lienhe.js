
import React, { useEffect  } from 'react';
import '../css/lienhe.css';
import { FaEnvelope } from 'react-icons/fa';
class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <div className="contact-info">
        <address className="address">
          <h1>Liên hệ</h1>
          <p>Hãy liên hệ với chúng tôi để biết thêm thông tin.</p>
         
            <p>CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES</p>
            <p>Địa chỉ: Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam</p>
            <p>Điện thoại: 02838386852</p>
            <p> Fax: 02838386853</p>
            <p>Email: hotro@futa.vn</p>
            <p>Hotline: 19006067</p>
          </address>
        </div>
        <div className="contact-form">
        <h2><FaEnvelope /> Gửi thông tin liên hệ đến chúng tôi</h2>
          <form >
          <div className="form-group">
            <label htmlFor="name">Họ và Tên:</label>
            <input
              type="text"
              id="name"
              name="name"
             
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
             
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Tin nhắn:</label>
            <textarea
              id="message"
              name="message"
              
              required
            ></textarea>
          </div>
          <button type="submit">Gửi</button>
        </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
