import React from 'react';
import { Tab, Nav, Form, Button } from 'react-bootstrap';
import '../css/login.css';
import text from '../image/logo/Text-mailinh.png';
function LoginPage() {
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
                      type="email"
                      id="loginName"
                      className="input-login"
                      placeholder="Nhập số điện thoại"
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
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
