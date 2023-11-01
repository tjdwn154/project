import React, { useEffect, useState } from "react";
import { CookieValue } from "../../../util/cookieutil";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Epilogue.css"; // 스타일 파일을 임포트

function Epilogue() {
  const [myReivew, setMyReivew] = useState([]);
  const [performanceInfo, setPerformanceInfo] = useState([]);
  const memberId = CookieValue("memberId");

  const fetchPerformanceInfo = (mt20id) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/pblprfr/${mt20id}`)
      .then((response) => {
        const performanceInfo = response.data.dbs.db[0];
        return performanceInfo;
      })
      .catch((error) => {
        console.error(`mt20id(${mt20id})에 대한 공연 정보를 불러오는 중 오류 발생:`, error);
        return null;
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/my-review?memberId=${memberId}`)
      .then((response) => {
        const reviewData = response.data.results;
        setMyReivew(reviewData);
        // performanceId 추출하여 저장
        const ids = reviewData.map((review) => review.performanceId);
        // 공연 정보 가져오기
        Promise.all(ids.map((id) => fetchPerformanceInfo(id)))
          .then((performanceInfoArray) => {
            setPerformanceInfo(performanceInfoArray);
          })
          .catch((error) => {
            console.error("공연 정보 가져오기 오류", error);
          });
      })
      .catch((error) => {
        console.error("오류 발생", error);
      });
  }, [memberId]);

  return (
    <div>
      <p className="name2">나의 이용후기</p>
      <div className="card-grid">
        {performanceInfo && myReivew.length > 0 ? (
          myReivew.map((review, index) => (
            <div key={review.reviewId}>
              <Card key={review.reviewId}>
                <Link to={`/Reservation/${performanceInfo[index] && performanceInfo[index].mt20id}`}>
                  <Card.Img
                    variant="top"
                    src={performanceInfo[index] && performanceInfo[index].poster}
                    className="review-image"
                  ></Card.Img>
                </Link>
                <Card.Body className="card-Body">
                  <Card.Title className="card-title">
                    {performanceInfo[index] && performanceInfo[index].prfnm}
                  </Card.Title>
                  <Card.Subtitle className="card-subtitle">{review.reviewTitle}</Card.Subtitle>
                  <Card.Text className="card-Text">{review.reviewContent}</Card.Text>
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

export default Epilogue;
