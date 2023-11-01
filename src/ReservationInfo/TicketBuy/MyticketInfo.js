import "./MyticketInfo.css";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { generateUniqueNumber } from "../../util/ReservationNum"; // 예매번호

const MyticketInfo = (props) => {
  const { performanceData } = props;
  const navigate = useNavigate();

  // 받아온 예매 정보
  const location = useLocation();
  const selectedTime = location.state.selectedTime;
  const selectedPrice = location.state.selectedPrice.split("원");
  const selectedDay = location.state.selectedDay;
  const selectedSeat = location.state.selectedSeat;

  const memberId = document.cookie
    .split("; ")
    .find((row) => row.startsWith("memberId="))
    .split("=")[1];

  // 예매 번호 생성
  const reservationNumber = generateUniqueNumber();

  const handleOrderClick = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/reservation`,
        {
          performanceData: { ...performanceData },
          reservationNumber: reservationNumber,
          selectedTime: selectedTime,
          selectedDay: selectedDay,
          selectedPrice: selectedPrice,
          memberId: memberId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        // 성공적으로 예약이 완료되면 이에 대한 처리를 수행
        // 예: 예약 완료 페이지로 이동
        navigate("/orderComplete", { state: { performanceData, reservationNumber, selectedPrice, selectedSeat } });
        console.log("예약 성공: ", response);
      })
      .catch((error) => {
        // 예약 실패 시 처리 (예: 오류 메시지 표시)
        console.error("예약 실패:", error);
      });
  };

  return (
    <div id="myticketInfo-content">
      <div id="myticketInfo-inner">
        <img src={performanceData.poster} />
        <div id="myticketInfo-inner-content">
          <h1>
            {performanceData.genrenm} {"<"} {performanceData.prfnm}
            {">"}
          </h1>
          <p className="myticketInfo">{performanceData.prfpdfrom}</p>
          <p className="myticketInfo">{performanceData.prfpdto}</p>
          <p className="myticketInfo">{performanceData.fcltynm}</p>
          <p className="myticketInfo">관람 시간 : {performanceData.prfruntime}</p>
        </div>
      </div>

      <div id="choose-info">
        <div id="choose-myinfo">
          <p className="choose-title">MY예매정보</p>
          <div id="choose-title-box">
            <p className="choose-inner-info">예매날짜 : {selectedDay}</p>
            <p className="choose-inner-info">
              공연 시간 : {selectedTime} 좌석 : {selectedSeat}
            </p>
            <p className="choose-inner-info"></p>
          </div>
        </div>

        <div id="price-box">
          <p className="price-info">총 결제금액</p>
          <p className="price-info">{selectedPrice}</p>
          <p className="price-info">원</p>
        </div>

        <button
          id="reservation-ing-btn"
          onClick={handleOrderClick}
          disabled={props.infoFinCheck}
          style={{ backgroundColor: props.infoFinCheck ? "gray" : "#b72727" }}
        >
          예매하기
        </button>
      </div>
    </div>
  );
};

export default MyticketInfo;
