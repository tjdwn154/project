import React from "react";
import { Modal, Button } from "react-bootstrap";

function SearchModal({ show, handleClose, findId, alertMessage }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>티켓 1번가</Modal.Title>
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
  );
}

export default SearchModal;
