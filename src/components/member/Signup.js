import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    memberId: "",
    memberPw: "",
    confirmPw: "", // 비밀번호 확인 필드
    memberName: "",
    email: "",
    age: "",
    gender: "M", // 초기값 설정 (남성)
    phone: "",
  });
  const [errors, setErrors] = useState({}); // 유효성 검사 오류 메세지
  const [available, setAvailable] = useState(true); // 아이디 사용 가능 여부
  const [success, setSuccess] = useState(false); // 회원가입 성공 여부
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "memberPw" || name === "confirmPw") {
      setErrors({ ...errors, memberPw: undefined, confirmPw: undefined });
    }
  };

  // 중복검사
  const handleCheckId = (e) => {
    e.preventDefault();
    const memberId = formData.memberId;
    if (memberId.trim() === "") {
      return;
    }
    setAvailable(false); // 중복 검사 중임을 표시
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/check-id?memberId=${memberId}`)
      .then((response) => {
        if (response.data.exists) {
          setAvailable(false); // 중복 검사 완료
          setErrors({ ...errors, memberId: "아이디가 이미 사용 중입니다." });
          console.log("아이디 사용 불가능");
        } else {
          setAvailable(true); // 중복 검사 완료
          setErrors({ ...errors, memberId: "사용 가능한 아이디입니다." });
          console.log("아이디 사용 가능");
        }
      })
      .catch((error) => {
        setAvailable(true); // 중복 검사 실패(다음 검사를 위해 true)
        console.error("아이디 중복 검사 오류", error);
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
    if (formData.memberPw !== formData.confirmPw) {
      errors.confirmPw = "비밀번호가 일치하지 않습니다.";
    }
    if (formData.memberName.trim() === "") {
      errors.memberName = "이름을 입력하세요.";
    }
    if (formData.email.trim() === "") {
      errors.email = "이메일을 입력하세요.";
    }
    if (formData.phone.trim() === "") {
      errors.phone = "전화번호를 입력하세요.";
    }

    if (Object.keys(errors).length === 0 && available) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/signup`, formData)
        .then((response) => {
          console.log("회원가입 성공", response.data);
          setSuccess(true); // 회원가입 성공
          alert("회원가입이 성공적으로 완료되었습니다.");
        })
        .catch((error) => {
          console.error("회원가입 실패", error);
          alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
        });
    } else {
      setErrors(errors);
    }
  };

  useEffect(() => {
    // 회원가입이 성공하면 로그인 페이지로 이동
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

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
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow px-4">
              <Card.Body className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  <Link to="/">
                    <img src="/logo.png" alt="" />
                  </Link>
                </h2>
                <div className="mb-3">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicId">
                      <Form.Label className="text-center">아이디</Form.Label>
                      <Form.Control
                        type="text"
                        name="memberId"
                        value={formData.memberId}
                        onChange={handleChange}
                        style={{ borderRadius: "10px" }}
                      />
                      <Button
                        variant="secondary"
                        onClick={handleCheckId}
                        style={{ borderRadius: "10px", width: "100px" }}
                        className="mt-2"
                      >
                        중복 확인
                      </Button>
                      <Form.Text className={available ? "text-success" : "text-danger"}> {errors.memberId}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>비밀번호</Form.Label>
                      <Form.Control
                        type="password"
                        name="memberPw"
                        value={formData.memberPw}
                        onChange={handleChange}
                        style={{ borderRadius: "10px" }}
                      />
                      {errors.memberPw && <Form.Text className="text-danger">{errors.memberPw}</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                      <Form.Label>비밀번호 확인</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPw"
                        value={formData.confirmPw}
                        onChange={handleChange}
                        style={{ borderRadius: "10px" }}
                      />
                      {errors.confirmPw && <Form.Text className="text-danger">{errors.confirmPw}</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="text-center">이름</Form.Label>
                      <Form.Control
                        type="text"
                        name="memberName"
                        value={formData.memberName}
                        onChange={handleChange}
                        style={{ borderRadius: "10px" }}
                      />
                      {errors.memberName && <Form.Text className="text-danger">{errors.memberName}</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">이메일</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ borderRadius: "10px" }}
                      />
                      {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGender">
                      <Form.Label className="text-center">성별</Form.Label>
                      <Form.Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        style={{ borderRadius: "10px" }}
                      >
                        <option value="M">남성</option>
                        <option value="F">여성</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhoneNum">
                      <Form.Label className="text-center">전화번호</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ borderRadius: "10px" }}
                      />
                      {errors.phone && <Form.Text className="text-danger">{errors.phone}</Form.Text>}
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit" style={{ width: "100%", borderRadius: "10px" }}>
                        회원가입
                      </Button>
                    </div>
                  </Form>

                  <div className="mt-3">
                    <p className="mb-0 text-center">
                      이미 회원이신가요?{" "}
                      <Link to="/login" className="text-primary fw-bold">
                        로그인
                      </Link>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
