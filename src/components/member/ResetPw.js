import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchModal from "./SearchModal";

function ResetPw() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validToken, setValidToken] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token"); // url토큰 추출

  const errors = {};
  if (newPassword.length < 6) {
    errors.newPassword = "비밀번호는 6자 이상이어야 합니다.";
  }
  if (newPassword !== confirmPassword) {
    errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
  }

  const handlePwChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPwChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClose = () => {
    setShow(false);
    if (success) navigate("/login");
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/check-token/${token}`)
      .then((response) => {
        if (response.data.success) {
          setValidToken(true); // 토큰이 유효한 경우
        } else {
          setValidToken(false); // 토큰이 유효하지 않은 경우
        }
      })
      .catch((error) => {
        console.error("API 요청 오류:", error);
        setValidToken(false); // 요청 중 오류가 발생한 경우
      });
  }, [token]);

  const handleResetPw = () => {
    //서버에서는 토큰을 검증하고 비밀번호를 변경합니다.
    if (validToken && newPassword.length >= 6 && newPassword === confirmPassword) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/new-pw`, { token, newPassword })
        .then((response) => {
          if (response.data.success) {
            setSuccess(response.data.success);
            setAlertMessage("비밀번호가 성공적으로 변경되었습니다.");
            setShow(true);
          } else if (response.data.message) {
            setAlertMessage(response.data.message);
            setShow(true);
          } else {
            setAlertMessage("비밀번호 변경 중 오류가 발생했습니다.");
            setShow(true);
          }
        })
        .catch((error) => {
          console.error("비밀번호 변경 오류: " + error);
        });
    }
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
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>새로운 비밀번호:</Form.Label>
                    <Form.Control type="password" value={newPassword} onChange={handlePwChange} />
                    {errors.newPassword && <Form.Text className="text-danger">{errors.newPassword}</Form.Text>}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>비밀번호 확인:</Form.Label>
                    <Form.Control type="password" value={confirmPassword} onChange={handleConfirmPwChange} />
                    {errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword}</Form.Text>}
                  </Form.Group>
                  <Button onClick={handleResetPw}>비밀번호 재설정</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <SearchModal show={show} handleClose={handleClose} alertMessage={alertMessage} />
    </div>
  );
}

export default ResetPw;
