import React, { useState } from "react";
import Rev from "./Rev";
import { Button } from "react-bootstrap";

function ReviewInfo() {
  const [isShow, setIsShow] = useState(false);
  const [reviews, setReviews] = useState([]);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={toggleShow}>
        후기 작성하기
      </Button>
      {isShow && <Rev addReview={addReview} />}
      <div style={{ marginTop: "5em" }}>
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <ul key={index}>
            <li>
              <div>제목: {review.title}</div>
              <div>내용: {review.content}</div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ReviewInfo;
