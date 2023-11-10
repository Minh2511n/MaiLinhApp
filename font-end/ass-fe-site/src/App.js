// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar2";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactPage from "./components/lienhe";
import Login from "./components/loginand";
import Lichtrinh from "./components/lichtrinh";
import Trangchu from "./components/trangChu/trangchu";
import Tracuu from "./components/tracuu";
import Hoadon from "./components/hoadon";
import Loc from "./components/trangChu/loc";
import Tintuc from "./components/tintuc";
import Lsmuave from "./components/lichsumuave";
import Doimk from "./components/doimatkhau";
import Thongttk from "./components/thongtintaikhoan";
import Mailinhpay from "./components/lichsugiaodịch";
import Vechungtoi from "./components/vechungtoi";
import ThongTin from "./components/trangChu/ThongTin";
import SeatSelection from "./components/trangChu/loc";
import store from "./redux/store";
function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          {showNavbar && <Navbar />}
          <div className="content">
            <Routes>
              <Route path="/" element={<Trangchu />}>
                <Route index element={<ThongTin />} />
                <Route path="timchuyen" element={<SeatSelection />} />
              </Route>
              <Route path="/timchuyen" element={<Loc />} />
              <Route path="/lienhe" element={<ContactPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/lichtrinh" element={<Lichtrinh />} />
              <Route path="/tracuu" element={<Tracuu />} />
              <Route path="/tintuc" element={<Tintuc />} />
              <Route path="/vechungtoi" element={<Vechungtoi />} />
              <Route path="/Lsmuave" element={<Lsmuave />} />
              <Route path="/doimk" element={<Doimk />} />
              <Route path="/thongttk" element={<Thongttk />} />
              <Route path="/Mailinhpay" element={<Mailinhpay />} />
              <Route
                path="/hoadon"
                element={<Hoadon setShowNavbar={setShowNavbar} />}
              />
              {/* Định nghĩa các Route khác ở đây nếu cần */}
            </Routes>
          </div>
          <br />
          {showNavbar && <Footer />}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
