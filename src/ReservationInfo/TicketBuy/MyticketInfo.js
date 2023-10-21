import "./MyticketInfo.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyticketInfo = (props) => {
  const { performanceData } = props;
  const navigate = useNavigate();

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
            <p className="choose-inner-info">선택좌석</p>
            <p className="choose-inner-info">티켓금액</p>
          </div>
        </div>

        <div id="price-box">
          <p className="price-info">총 결제금액</p>
          <p className="price-info">30,000</p>
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
