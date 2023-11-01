import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Rev from "./Rev";
import { Button } from "react-bootstrap";
import { CookieValue } from "../../../util/cookieutil";
import axios from "axios";
import { Card } from "react-bootstrap";

function ReviewInfo() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const memberId = CookieValue("memberId");
  // URL에 있는 공연번호 추출
  const location = useLocation();
  const parts = location.pathname.split("/");
  const performanceId = parts[parts.length - 1];

  useEffect(() => {
    // 리뷰 권한 확인
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/review-check?memberId=${memberId}&performanceId=${performanceId}`)
      .then((response) => {
        const dataInfo = response.data;
        setData(dataInfo);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, [memberId, performanceId]);

  useEffect(() => {
    // 리뷰 데이터를 불러오는 요청
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/reviews?performanceId=${performanceId}`)
      .then((response) => {
        const showDataInfo = response.data.results;
        // 날짜를 한국 시간으로 변환
        const transReservations = showDataInfo.map((showData) => ({
          ...showData,
          reviewDate: new Date(showData.reviewDate).toLocaleString("ko", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }));
        setShowData(transReservations);
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, [performanceId]);

  const toggleShow = () => {
    setIsShow(!isShow);
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
      {isShow && <Rev />}
      <div style={{ marginTop: "5em" }}>
        <h2>공연 관람 후기</h2>
        {showData.length > 0 ? (
          showData.map((review) => (
            <div key={review.reviewId}>
              <Card key={review.reviewId} style={{ width: "18rem", margin: "0 auto", marginTop: "5em" }}>
                <Card.Body>
                  <Card.Title>{review.reviewTitle}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">작성일: {review.reviewDate}</Card.Subtitle>
                  <Card.Text>{review.reviewContent}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>리뷰가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default ReviewInfo;
