import "./MyticketInfo.css";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MyticketInfo = (props) => {
  const { performanceData } = props;
  const navigate = useNavigate();

  // 받아온 예매 정보
  const location = useLocation();
  const selectedTime = location.state.selectedTime;
  const selectedPrice = location.state.selectedPrice.split("원");
  const selectedDay = location.state.selectedDay;
  const selectedSeat = location.state.selectedSeat;

  const handleOrderClick = () => {
    navigate("/orderComplete", { state: { performanceData } });
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

        <button id="reservation-ing-btn" onClick={handleOrderClick}>
          예매하기
        </button>
      </div>
    </div>
  );
};

export default MyticketInfo;
