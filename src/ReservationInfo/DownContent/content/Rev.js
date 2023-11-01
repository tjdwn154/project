import React, { useState } from "react";
import { Form, FloatingLabel, Button, Stack } from "react-bootstrap";
import axios from "axios";
import { CookieValue } from "../../../util/cookieutil";
import { useLocation } from "react-router-dom";
import SearchModal from "../../../components/member/SearchModal";

function Rev() {
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const memberId = CookieValue("memberId");
  // URL에 있는 공연번호 추출
  const location = useLocation();
  const parts = location.pathname.split("/");
  const performanceId = parts[parts.length - 1];
  // 날짜 형식
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const reviewDate = `${year}-${month}-${day}`;

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1em",
  };

  const textAreaStyle = {
    width: "700px",
    resize: "none",
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = () => {
    const review = {
      memberId,
      performanceId,
      reviewTitle: reviewTitle,
      reviewContent: reviewContent,
      reviewDate,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/add-review`, review)
      .then((response) => {
        setReviewTitle("");
        setReviewContent("");
        setAlertMessage("소중한 리뷰 감사합니다.");
        setShow(true);
      })
      .catch((error) => {
        console.error("리뷰 작성 중 오류 발생:", error);
        setAlertMessage("리뷰 작성 중 오류가 발생하였습니다.");
        setShow(true);
      });
  };

  return (
    <div style={containerStyle}>
      <h2>후기 작성</h2>
      <Form>
        <FloatingLabel controlId="floatingTextarea" label="제목" className="mb-3">
          <Form.Control
            as="textarea"
            value={reviewTitle}
            onChange={(e) => setReviewTitle(e.target.value)}
            style={textAreaStyle}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="내용">
          <Form.Control
            as="textarea"
            value={reviewContent}
            onChange={(e) => setReviewContent(e.target.value)}
            style={{ ...textAreaStyle, height: "200px" }}
          />
        </FloatingLabel>
        <Stack gap={2} className="col-md-3 ms-auto mt-2">
          <Button variant="secondary" onClick={handleSubmit}>
            글 남기기
          </Button>
        </Stack>
      </Form>
      <SearchModal show={show} handleClose={handleClose} alertMessage={alertMessage} />
    </div>
  );
}

export default Rev;
