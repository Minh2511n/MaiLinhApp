// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar2';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactPage from './components/lienhe';
import Login from './components/loginand';
import Lichtrinh from './components/demo';
import Trangchu from './components/trangchu';
import login2 from './components/loginand';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar 
        />
        <div className="content">
          <Routes>
           <Route path="/" element={<Trangchu />} /> 
            <Route path="/lienhe" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lichtrinh" element={<Lichtrinh />} />
            <Route path="/demo" element={<Trangchu />} />
            <Route path="/login2" element={<login2 />} /> 
            {/* Định nghĩa các Route khác ở đây nếu cần */}
          </Routes>
        </div>
       <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

