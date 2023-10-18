import React, { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { EmailModal } from "../components/EmailModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import ConfirmationLoading from "../components/ConfirmationLoading";
import { gsap } from "gsap";
export default function OrderConfirmation() {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      "#confirmationLoadingWrap",
      { opacity: 1 },
      { opacity: 0.8, display: "none", duration: 1.5 }
    );
  });
  return (
    <div id="orderCononfirmationWrap">
      <ConfirmationLoading />
      <div className="container">
        <div className="top">
          <h1>
            <Link to="/">
              <img src="logo.png" alt="티켓1번가 로고" />
            </Link>
          </h1>
          <div className="iconBox">
            <FontAwesomeIcon icon="fa-regular fa-circle-check" />
          </div>
          <h2>예매가 확정되었습니다</h2>
          <p>구매해주셔서 감사합니다.</p>
          <hr />
        </div>
        <div className="bottom">
          <div className="orderReceipt">
            <div className="left">
              <img
                src="https://picsum.photos/70/100?random=1"
                alt="구매한 영화 포스터"
              />
            </div>
            <div className="right">
              <p>
                <span>예매번호: </span>000166954
              </p>
              <p>
                <span>예매번호: </span>000166954
              </p>
              <p>
                <span>예매번호: </span>000166954
              </p>
            </div>
          </div>
          <p>
            <Button
              variant="light"
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            >
              이메일로 받기
              <FontAwesomeIcon icon="fa-regular fa-paper-plane" />
            </Button>
          </p>
        </div>
        <div className="btnBox">
          <Button variant="primary">예매내역 확인</Button>
          <Button variant="primary">더 둘러보기</Button>
        </div>
      </div>
      {isClicked ? <EmailModal setIsClicked={setIsClicked} /> : null}
    </div>
  );
}
