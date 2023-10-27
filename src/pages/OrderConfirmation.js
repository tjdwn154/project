import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EmailModal } from "../components/EmailModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import ConfirmationLoading from "../components/ConfirmationLoading";
import { gsap } from "gsap";
export default function OrderConfirmation() {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    gsap.fromTo("#confirmationLoadingWrap", { opacity: 1 }, { opacity: 0.8, display: "none", duration: 1.5 });
  });
  const location = useLocation();
  const performanceData = location.state.performanceData;
  const reservationNumber = location.state.reservationNumber;
  const selectedPrice = location.state.selectedPrice;
  const selectedSeat = location.state.selectedSeat;

  return (
    <div id="orderCononfirmationWrap">
      <ConfirmationLoading />
      <div className="container">
        <div className="top">
          <h1>
            <Link to="/">
              <img src="/logo.png" alt="티켓1번가 로고" />
            </Link>
            <button
              title="티켓 이메일 발송"
              type="button"
              className="btn btn-light"
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="paper-plane"
                className="svg-inline--fa fa-paper-plane "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"
                ></path>
              </svg>
            </button>
          </h1>
          <div className="iconBox">
            <FontAwesomeIcon icon="fa-regular fa-circle-check" />
          </div>
          <h2>예매가 확정되었습니다!</h2>
          <p>구매해주셔서 감사합니다.</p>
          <hr />
        </div>
        <div className="bottom">
          <div className="orderReceipt">
            <div className="left">
              <img style={{ width: "70px", height: "100px" }} src={performanceData.poster} alt="구매한 영화 포스터" />
            </div>
            <div className="right">
              <p>
                <span>예매번호: </span>
                {reservationNumber}
              </p>
              <p>
                <span>공연제목: </span>
                {performanceData.prfnm}
              </p>
              <p>
                <span>결제금액: </span>
                {selectedPrice}원({selectedSeat})
              </p>
            </div>
          </div>
        </div>
        <div className="btnBox">
          <Link to="/mypage/check">
            <Button variant="primary">예매내역 확인</Button>
          </Link>
          <Link to="/">
            <Button variant="primary">더 둘러보기</Button>
          </Link>
        </div>
      </div>
      {isClicked ? <EmailModal setIsClicked={setIsClicked} /> : null}
    </div>
  );
}
