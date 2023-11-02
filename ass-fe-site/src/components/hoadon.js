import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/hoadon.css';
import { FaSearch, FaUser, FaList } from 'react-icons/fa';

function Hoadon({ setShowNavbar }) {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    document.title = 'Hóa đơn';


    setShowNavbar(false);

    return () => {
      document.title = 'Hóa đơn';

      setShowNavbar(true);
    };
  }, [setShowNavbar]);

  return (
    <div>
      <div className="header-hd">
        <div className="container-hd">
          <div className="right-menu-hd">
            <div className="nav">
              <Link to="/trangchu" style={{ marginLeft: '-4cm' }}>
                <img src="duong-dan-den-hinh-anh.png" alt="Mô tả hình ảnh" />
              </Link>
              <span>
                <FaSearch style={{ color: '#ffffff', padding: '5px', fontSize: '30px' }} />
                <a href="#">Tra cứu hóa đơn</a>
              </span>
              <span>
                <FaList style={{ color: '#fafafa', padding: '5px', fontSize: '30px' }} />
                <a href="#">Xác thực hóa đơn</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="search-section-hd">
        <div className="tchd">
          <h4 className="search-title-hd">TRA CỨU HÓA ĐƠN</h4>
          <form className="search-form-hd">
            <span className="span-user">
              <FaUser style={{ color: '#868788' }} />
            </span>
            <input className="search-input-hd" placeholder="Nhập số hóa đơn" />
          </form>
          <button className="search-button-hd" type="submit" style={{ verticalAlign: 'top' }}>
            <FaSearch style={{ color: '#ffffff', padding: '5px', fontSize: '25px' }} />
            Tra cứu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hoadon;
