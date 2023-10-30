import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function OkModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="okModalBox"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Link to="/"><img src="/color_logo.png" alt="티켓1번가 로고" /></Link>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>문의하신 사항이 접수되었습니다!</h4>
        <p>최대한 빠른 시간 내에 답변해 드리겠습니다.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="closeBtn">
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function ContactUs() {
  const [contactMSG, setContactMSG] = useState("");
  const storeContent = (e) => {
    setContactMSG(e.target.value);
  };
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div id="contactWrap">
      <div className="titleBox">
        <h3>문의하기</h3>
        <p>
          <Link to="/cs/faq">FAQ</Link>에서도 찾으시는 답변이 없으신가요? 아래
          양식을 작성하여 문의해주세요.
        </p>
      </div>
      <Form>
        <div className="inline2in1">
          <Form.Group className="mb-3">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control type="email" placeholder="abc@abc.com" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>메시지</Form.Label>
          <textarea value={contactMSG} onChange={storeContent} rows={5} />
        </Form.Group>
        {isClicked ? (
          <OkModal 
          show={isClicked} onHide={() => setIsClicked(false)} />
        ) : null}
        <Button
          variant="primary"
          onClick={() => {
            if (contactMSG.trim() === '') {
              alert('내용을 입력하세요.');
            } else {
              setIsClicked(true);
            }
          }}
        >
          접수
        </Button>
      </Form>
    </div>
  );
}
