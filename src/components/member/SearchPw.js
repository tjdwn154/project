import React, { useRef, useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import SearchModal from "./SearchModal";

function SearchPw() {
  const [memberId, setMemberId] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlesetMemberIdChange = (e) => {
    setMemberId(e.target.value);
  };
  const handleClose = () => {
    setShow(false);
  };

  const sendEmail = () => {
    if (memberId && email) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/reset-pw`, { memberId, email })
        .then((response) => {
          if (response.data.success) {
            setAlertMessage("이메일이 성공적으로 전송되었습니다.");
            setShow(true);
          } else {
            setAlertMessage("사용자 정보가 없습니다.");
            setShow(true);
          }
        })
        .catch((error) => {
          console.error("비밀번호 재설정 오류:", error);
        });
    } else if (!email && memberId) {
      setAlertMessage("이메일을 입력해주세요");
      setShow(true);
    } else if (email && !memberId) {
      setAlertMessage("전화번호를 입력해주세요");
      setShow(true);
    } else {
      setAlertMessage("이메일과 전화번호를 입력해주세요.");
      setShow(true);
    }
  };

  return (
    <Container>
      <div className="p-4 text-center bg-body-tertiary rounded-3" style={{ width: "100%", height: "25em" }}>
        <p className="col-lg-15 mx-auto fs-5 text-muted">
          회원 가입시 입력한 <br />
          아이디와 이메일을 입력하세요.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="text" value={memberId} onChange={handlesetMemberIdChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="ex) tieckt@1stStreet"
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Button className="btn-lg px-4 rounded-pill mt-4" onClick={sendEmail}>
              전송
            </Button>
          </Form>
        </div>
        <SearchModal show={show} handleClose={handleClose} alertMessage={alertMessage} />
      </div>
    </Container>
  );
}

export default SearchPw;
