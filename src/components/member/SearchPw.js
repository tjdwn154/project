import React, { useState, useEffect } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";

function SearchPw() {
  return (
    <Container>
      <div className="p-4 text-center bg-body-tertiary rounded-3" style={{ width: "100%", height: "25em" }}>
        <p className="col-lg-15 mx-auto fs-5 text-muted">
          회원 가입시 입력한 <br />
          아이디를 입력하세요.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>아이디</Form.Label>
              <Form.Control type="text" placeholder="아이디" />
            </Form.Group>
            <Button className="btn-lg px-4 rounded-pill mt-4" type="button">
              본인인증
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default SearchPw;
