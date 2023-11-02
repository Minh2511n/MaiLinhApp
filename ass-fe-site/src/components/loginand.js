import React, { useState, useEffect } from 'react';
import { Tab, Nav, Form, Button } from 'react-bootstrap';
import '../css/login.css';
import text from '../image/logo/Text-mailinh.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { registerUser } from '../services/login.jsx';

function LoginPage() {
  const navigate = useNavigate();
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleRegister = () => {
    const userData = {
      tenTaiKhoan: registerUsername,
      matKhau: registerPassword,
    };

    registerUser(userData)
      .then((response) => {
        console.log('Đăng ký thành công:', response.data);
        navigate('/');
        document.getElementById('success-message').style.display = 'block';

        // Toastify options
        toast.success('Đăng ký thành công', {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 2000, // Đóng tự động sau 2 giây
          hideProgressBar: true, // Ẩn thanh tiến trình
          pauseOnHover: false, // Không tạm dừng khi di chuột qua
          closeOnClick: true, // Đóng khi click
        });
      })
      .catch((error) => {
        console.error('Lỗi đăng ký:', error);
      });
  };

  useEffect(() => {
    document.title = 'Đăng nhập';

    return () => {
      document.title = 'Mai Linh Tour';
    };
  }, []);

  return (
    <div className="container h-custom">
      <div className="login row">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <div>
            <img
              alt=""
              src={text}
              style={{ paddingTop: '25px', paddingLeft: '40px' }}
            />
          </div>
          <img
            src="https://storage.googleapis.com/futa-busline-cms-dev/TVC_00aa29ba5b/TVC_00aa29ba5b.svg"
            className="img-fluid"
            alt="Sample image"
          />
        </div>
        <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
          <div className="text-center">
            <h3 style={{ paddingTop: '20px', fontSize: '1.5rem', lineHeight: '2rem' }}>
              Đăng nhập tài khoản
            </h3>
          </div>
          <Tab.Container id="ex1" defaultActiveKey="pills-login">
            <Nav className="mb-3" style={{ paddingTop: '30px' }}>
              <Nav.Item className="tab-form">
                <Nav.Link eventKey="pills-login">
                  ĐĂNG NHẬP
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="tab-form">
                <Nav.Link eventKey="pills-register">ĐĂNG KÝ</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="pills-login">
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type=""
                      id="loginName"
                      className="input-login"
                      placeholder="Nhập số điện thoại"
                      value={registerUsername}
                      onChange={(e) => setRegisterUsername(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      id="loginPassword"
                      className="input-login"
                      placeholder="Nhập mật khẩu"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button onClick={handleRegister} variant="login" type="submit" className="btn-login">
                    Đăng ký
                  </Button>
                  <div className="text-center">
                    <p>
                      Not a member? <a href="#!">Register</a>
                    </p>
                  </div>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="pills-register">
                <Form>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      id="registerName"
                      className="input-registerName border"
                      placeholder="Nhập SDT"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      id="loginPassword"
                      className="input-login"
                      placeholder="Nhập mật khẩu"
                    />
                  </Form.Group>
                  <Button variant="login" type="submit" className="btn-login">
                    Sign in
                  </Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <div id="success-message" style={{ display: 'none', color: 'green' }}>
            Đăng ký thành công!
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
