import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    memberId: "",
    memberPw: "",
  });
  const [errors, setErrors] = useState({}); // 유효성 검사 오류 메세지
  const navigate = useNavigate();

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
        .post("http://localhost:3001/api/login", formData)
        .then((response) => {
          // 로그인 성공 시 처리
          console.log("로그인 성공", response.data);
          // 쿠키 정의 및 유효기간
          document.cookie = `memberId=${formData.memberId}; expires=${new Date(
            Date.now() + 3600000 * 24
          ).toUTCString()}`;
          navigate("/");
          // 로그인 성공 후의 동작을 정의
        })
        .catch((error) => {
          // 로그인 실패 시 처리
          console.error("로그인 실패", error);
          // 로그인 실패 시의 동작을 정의
        });
    } else {
      // 유효성 검사 실패 시 에러 상태를 설정
      setErrors(errors);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container
        style={{ width: "350px", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <img src="/logo.png" alt="" style={{ width: "150px" }} />
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
        </Form>

        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <Link to="/SearchId">아이디 찾기</Link> | <Link to="/SearchPw">비밀번호 찾기</Link>
        </div>
        <div style={{ marginRight: "15px", textAlign: "center" }}>
          <Link to="/signup">회원가입</Link>
        </div>
      </Container>
    </div>
  );
}

export default Login;
