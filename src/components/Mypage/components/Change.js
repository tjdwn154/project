import React, { useState, useEffect } from "react";
import { CookieValue } from "../../../util/cookieutil";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Change() {
  const memberId = CookieValue("memberId");
  const [data, setData] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/members?memberId=${memberId}`)
      .then((response) => {
        const memberInfo = response.data;
        setData(memberInfo);
        setUpdatedData({ ...memberInfo });
      })
      .catch((error) => {
        console.error("회원 정보를 불러오는 중 오류가 발생하였습니다.", error);
      });
  }, [memberId]);

  const handleSaveClick = () => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/update-member`, updatedData)
      .then(() => {
        setIsEditing(false);
        setData({ ...updatedData });
        alert("정보가 수정되었습니다.");
      })
      .catch((error) => {
        console.error("회원 정보를 수정하는 중 오류가 발생하였습니다.", error);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  return (
    <Container>
      <h2 className="name2">회원정보 수정</h2>
      <Row className="vh-10 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Form>
            <Form.Group controlId="memberId">
              <Form.Label>아이디: {isEditing ? updatedData.memberId : data.memberId}</Form.Label>
            </Form.Group>
            <Form.Group controlId="gender" className="mt-3">
              <Form.Label>성별: {data.gender}</Form.Label>
            </Form.Group>
            <Form.Group controlId="memberName" className="mt-3">
              <Form.Label>이름:</Form.Label>
              <Form.Control
                type="text"
                name="memberName"
                value={isEditing ? updatedData.memberName : data.memberName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>이메일:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={isEditing ? updatedData.email : data.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group controlId="phone" className="mt-3">
              <Form.Label>휴대폰 번호:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={isEditing ? updatedData.phone : data.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            {isEditing ? (
              <Button variant="primary" className="mt-3" onClick={handleSaveClick}>
                저장
              </Button>
            ) : (
              <Button variant="primary" className="mt-3" onClick={handleEditClick}>
                수정
              </Button>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Change;
