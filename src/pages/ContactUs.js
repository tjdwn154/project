import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ContactUs() {
  return (
    <div id="contactWrap">
      <h3>1대1문의</h3>
      <p>
        <Link to="/cs/faq">FAQ</Link>에서도 찾으시는 답변이 없으신가요?아래
        양식을 작성하여 문의해주세요.
      </p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control type="email" placeholder="abc@abc.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>메시지</Form.Label>
          <Form.Control type="text" className="textArea" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary" type="보내기">
          Submit
        </Button>
      </Form>
    </div>
  );
}
