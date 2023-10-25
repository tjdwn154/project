import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

function SearchPw () {
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
      .get(`http://localhost:3001/api/check-id?memberId=${memberId}`)
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
    } else {
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
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    <Link to="/">
                    <img src="/logo.png" alt="" />
                    </Link>
                  </h2>
                  <h4 className="text-body-emphasis" style={{marginTop:"50px", textAlign:"center"}}>
                    아이디 입력
                  </h4>
                  <p className="col-lg-8 mx-auto fs-6 text-muted" style={{textAlign:"center"}}>
                    비밀번호를 찾고자 하는 아이디와
                    <br/>
                    전화번호를 입력해주세요.
                  </p>
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
                      <Form.Text className={available ? "text-success" : "text-danger"}> {errors.memberId}</Form.Text>
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
                        비밀번호 찾기
                      </Button>
                    </div>
                    <div>
                      <p className="text-body-emphasis" style={{marginTop:"20px", textAlign:"center"}}>
                        아이디를 찾으시나요?
                      </p>
                      <div className="text-body-emphasis" style={{textAlign:"center"}}>
                        <Link to="/SearchId">
                          아이디 찾기
                        </Link>
                      </div>
                    </div>                    
                  </Form>
                </div>  
              </Card.Body>    
            </Card>
          </Col>
        </Row>
      </Container>   
    </div> 
  )
}

export default SearchPw; 