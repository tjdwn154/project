import React, { useState } from "react";
import { Form, FloatingLabel, Button, Stack } from "react-bootstrap";

function Rev({ addReview }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  const handleSubmit = () => {
    const review = {
      title: title,
      content: content,
    };
    // 작성한 후기를 ReviewInfo 컴포넌트로 전달
    addReview(review);
    // 후기 작성 후 폼 초기화
    setTitle("");
    setContent("");
  };

  return (
    <div style={containerStyle}>
      <h2>후기 작성</h2>
      <Form>
        <FloatingLabel controlId="floatingTextarea" label="제목" className="mb-3">
          <Form.Control as="textarea" value={title} onChange={(e) => setTitle(e.target.value)} style={textAreaStyle} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="내용">
          <Form.Control
            as="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ ...textAreaStyle, height: "200px" }}
          />
        </FloatingLabel>
        <Stack gap={2} className="col-md-3 ms-auto mt-2">
          <Button variant="secondary" onClick={handleSubmit}>
            글 남기기
          </Button>
        </Stack>
      </Form>
    </div>
  );
}

export default Rev;
