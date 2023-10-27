import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";

function SearchId() {
  const [findId, setFindId] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlephoneNumChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleFindID = () => {
    if (email && phoneNum) {
      axios
        .get(`http://localhost:3001/api/find-id?email=${email}&phone=${phoneNum}`)
        .then((response) => {
          if (response.data.memberId) {
            setFindId(response.data.memberId);
            setShow(true);
          } else {
            setAlertMessage("회원정보의 아이디가 없습니다.");
            setShow(true);
          }
        })
        .catch((error) => {
          console.error("아이디 찾기 오류:", error);
        });
    } else if (!email && phoneNum) {
      setAlertMessage("이메일을 입력해주세요");
      setShow(true);
    } else if (email && !phoneNum) {
      setAlertMessage("전화번호를 입력해주세요");
      setShow(true);
    } else {
      setAlertMessage("이메일과 전화번호를 입력해주세요.");
      setShow(true);
    }
    setFindId("");
  };

  return (
    <Container>
      <div className="p-4 text-center bg-body-tertiary rounded-3" style={{ width: "100%", height: "25em" }}>
        <p className="col-lg-15 mx-auto fs-5 text-muted">
          회원 가입시 입력한 <br />
          이메일과 전화번호를 입력하세요.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="ex) tieckt@1stStreet"
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>전화번호</Form.Label>
              <Form.Control
                type="text"
                value={phoneNum}
                placeholder="ex) 01011119999"
                onChange={handlephoneNumChange}
              />
            </Form.Group>
            <Button className="btn-lg px-4 rounded-pill mt-4" type="button" onClick={handleFindID}>
              아이디 찾기
            </Button>
          </Form>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>아이디 찾기</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {findId && <p>회원님의 아이디는 "{findId}" 입니다.</p>}
            {!findId && <p>{alertMessage}</p>}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              확인
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
}

export default SearchId;
