import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import '../css/routes.css'; // Import file CSS cho phần này

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Thêm CSS cho Carousel
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; 

import { Modal } from 'react-bootstrap';
import muiten from '../image/switch_location.svg';
import moment from 'moment';
function Timchuyen() {
  const [startDate, setStartDate] = useState(moment());
  const [returnDate, setReturnDate] = useState(null);

  const disabledDate = (current) => {
    // So sánh current với ngày hiện tại, nếu current trước ngày hiện tại thì trả về true (vô hiệu hóa), ngược lại trả về false (có thể chọn)
    return current.isBefore(moment().startOf('day'));
  };


  // const isValidDate = (current) => {
  //   const today = moment().startOf('day');
  //   return current.isSameOrAfter(today);
  // };

  const { RangePicker } = DatePicker;

  const [activeTab, setActiveTab] = useState('motchieu');
 
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };
    return (
        <div className="layout flex flex-col ">
        <div className="home-search z-30">
          <div className="search-form">
            <div className="flex items-center justify-between" style={{ paddingTop: '10px' }}>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === 'motchieu' ? 'active' : ''}`}
                    onClick={() => toggleTab('motchieu')}
                  >
                    Một chiều
                  </a>
                </li>
                <div style={{ width: '10px' }}></div>
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === 'khuhoi' ? 'active' : ''}`}
                    onClick={() => toggleTab('khuhoi')}
                  >
                    Khứ hồi
                  </a>
                </li>
              </ul>
              <span style={{ paddingLeft: '720px', color: 'red' }}>
                <a>Hướng dẫn mua vé</a>
              </span>
            </div>
            <div className="tab-content">
              <div
                className={`tab-pane fade show ${activeTab === 'motchieu' ? 'active' : ''}`}
                id="pills-motchieu"
                role="tabpanel"
              >
                <div className="grid grid-cols-1 pt-4 pb-4" style={{ width: '1128px' }}>
                  {/* Content for "Một chiều" tab */}
                  <div className="flex justify-center">
                    <div className="flex-1" style={{ marginRight: '-0.3cm' }}>
                      <label className="label2" style={{ marginRight: "4cm" }} >Điểm đi</label> <br />
                      <input
                        type="text"
                        className="input-search item-start form-control"
                        placeholder="Chọn điểm đi"
                        style={{ width: "258px" }}
                      />
                    </div>
                    <img className="location-image" src={muiten} alt="" style={{ marginBottom: "-20px" }} />
                    <div className="flex-1" style={{ marginLeft: '-0.3cm' }}>
                      <label className="label2" style={{ marginRight: "4cm" }}>Điểm đến</label> <br />
                      <input
                        type="text"
                        className="input-search item-start form-control"
                        placeholder="Chọn điểm đi"
                        style={{ width: "258px" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-2">
                    <div className="flex-1" >
                      <label className="label2" style={{ marginRight: "4cm" }}>Ngày đi</label> <br />
                      <div className="form-outline datetimepicker" style={{height:"67px"}}>
                      <DatePicker
                      value={startDate}
                  
                       onChange={(date) => setStartDate(date)} // Gọi sự kiện khi thay đổi thanh điều hướng
                      format="DD/MM/YYYY" // Định dạng ngày/tháng/năm đầy đủ
                      showTimeSelect
                      timeFormat="HH:mm:ss"
                      className="input-search item-start form-control"
                      id="datepicker"
                      disabledDate={disabledDate}
                      style={{ width: '205px' }}
                      picker="date"
            
                    />
                    
                        
                      </div>
                    </div>
                    <div className="flex-1">
                      <label className="label2" style={{ marginRight: "4cm" }}>Số vé</label> <br />
                      <div className="select-container">
                        <select className="custom-select" style={{ width: "258px", height: "67px" }}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === 'khuhoi' ? 'show active' : ''}`}
                id="pills-khuhoi"
                role="tabpanel"
              >
                <div className="grid grid-cols-1 pt-4 pb-4">
                  {/* Content for "Khứ hồi" tab */}
                  <div className="flex justify-center">
                    <div className="flex-1" style={{ marginRight: '-0.3cm' }}>
                      <label className="label2" style={{ marginRight: "4cm" }}>Điểm đi</label> <br />
                      <input
                        type="text"
                        className="input-search item-start form-control"
                        placeholder="Chọn điểm đi"
                      />
                    </div>
                    <img className="location-image" src={muiten} alt="" style={{ marginBottom: "-20px" }} />
                    <div className="flex-1" style={{ marginLeft: '-0.3cm' }}>
                      <label className="label2" style={{ marginRight: "4cm" }}>Điểm đến</label> <br />
                      <input
                        type="text"
                        className="input-search item-start form-control"
                        placeholder="Chọn điểm đi"
                      />
                    </div>
                  </div>
                  <div className="flex flex-2">
                    <div className="flex-1">
                      <label className="label2" style={{ marginRight: "100px" }}>Ngày đi</label> <br />
                      <div className="form-outline datetimepicker">
                        <DatePicker
                        value={startDate}
                        onChange={(date) => setStartDate(date)} // Cập nhật trạng thái startDate khi người dùng chọn một ngày
                        format="DD/MM/YYYY"
                        showTimeSelect
                        timeFormat="HH:mm:ss"
                        className="input-search item-start form-control"
                        id="datepicker"
                        disabledDate={disabledDate}
                        style={{ width: '205px' }}
                        />
                        
                      </div>
                    </div>
                    
                    <div className="flex-1" style={{ width: "205px" }}>
                      <label className="label2" style={{ marginRight: "100px" }}>Ngày về</label> <br />
                      <DatePicker
                        selected={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        format="DD/MM/YYYY"
                        showTimeSelect
                        timeFormat="HH:mm:ss"
                        className="input-search item-start form-control"
                        id="datepicker"
                        disabledDate={disabledDate}
                        style={{ width: '205px' }}
                      />
                      
                    </div>
                    <div className="flex-1" style={{ marginLeft: "10px" }}>
                      <label className="label2" style={{ marginRight: "20px" }}>Số vé</label> <br />
                      <div className="select-container">
                        <select className="custom-select" style={{ width: "96px", height: "67px" }}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/timchuyen">
          <button className="tcx-button" style={{ width: '200px' }}>
            Tìm chuyến xe
          </button>
        </a>
        </div>

      </div>
        );
    }
    
    export default Timchuyen;
    
    