import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rev from "./Rev";
import { Button } from "react-bootstrap";
import { CookieValue } from "../../../util/cookieutil";
import axios from "axios";

function ReviewInfo() {
  const [data, setData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [reviews, setReviews] = useState([]);
  const memberId = CookieValue("memberId");
  // URL에 있는 공연번호 추출
  const location = useLocation();
  const parts = location.pathname.split("/");
  const performanceId = parts[parts.length - 1];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/review-check?memberId=${memberId}&performanceId=${performanceId}`)
      .then((response) => {
        const dataInfo = response.data;
        setData(dataInfo);
        console.log(dataInfo[0]);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, [memberId, performanceId]);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      {data.length > 0 ? (
        <Button variant="outline-primary" onClick={toggleShow}>
          후기 작성하기
        </Button>
      ) : (
        <p>해당 공연에 대한 리뷰 권한이 없습니다.</p>
      )}
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
