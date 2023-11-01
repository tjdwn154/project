import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import SearchModal from "./SearchModal";

function Login() {
  const [formData, setFormData] = useState({
    memberId: "",
    memberPw: "",
  });
  const [errors, setErrors] = useState({}); // 유효성 검사 오류 메세지
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 유효성 검사
    const errors = {};
    // trim() = 양쪽 공백 제거
    if (formData.memberId.trim() === "") {
      errors.memberId = "아이디를 입력하세요.";
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.memberId)) {
      errors.memberId = "영문자와 숫자로만 구성되어야 합니다.";
    }
    if (formData.memberPw.length < 6) {
      errors.memberPw = "비밀번호는 6자 이상이어야 합니다.";
    }

    if (Object.keys(errors).length === 0) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/login`, formData)
        .then((response) => {
          // 로그인 성공 시 처리
          console.log("로그인 성공", response.data);
          // 쿠키 정의 및 유효기간
          document.cookie = `memberId=${formData.memberId}; expires=${new Date(
            Date.now() + 3600000 * 24
          ).toUTCString()}`;
          navigate("/");
        })
        .catch((error) => {
          console.error("로그인 실패", error);
        });
    } else {
      // 유효성 검사 실패 시 에러 상태를 설정
      setErrors(errors);
      setAlertMessage("아이디와 비밀번호를 확인하세요");
      setShow(true);
    }
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "10px",
      }}
    >
      <Container
        style={{ width: "350px", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <Link to="/">
            <img src="/logo.png" alt="" style={{ width: "150px" }} />
          </Link>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-2">
            <Form.Control
              type="text"
              placeholder="아이디"
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
              style={{ borderRadius: "10px" }}
            />
            <Form.Text className="text-danger">{errors.memberId}</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-2">
            <Form.Control
              type="password"
              placeholder="비밀번호"
              name="memberPw"
              value={formData.memberPw}
              onChange={handleChange}
              style={{ borderRadius: "10px" }}
            />
            <Form.Text className="text-danger">{errors.memberPw}</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" style={{ width: "100%", borderRadius: "10px" }}>
            로그인
          </Button>
          <Form.Text id="passwordHelpBlock" muted>
            <p className="mb-0 text-end">
              <Link to="/seacrhmember" className="text-primary fw-bold">
                ID | PW 찾기
              </Link>
            </p>
          </Form.Text>
        </Form>

        <div className="mt-3">
          <p className="mb-0 text-center">
            티켓1번가 처음이신가요?
            <br />
            <Link to="/signup" className="text-primary fw-bold">
              회원가입
            </Link>
          </p>
        </div>
      </Container>
      <SearchModal show={show} handleClose={handleClose} alertMessage={alertMessage} />
    </div>
  );
}

export default Login;
