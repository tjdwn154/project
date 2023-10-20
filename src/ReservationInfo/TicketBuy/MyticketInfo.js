import "./MyticketInfo.css";
import React, { useState } from "react";

const MyticketInfo = (props) => {
  const { performanceData } = props;
  return (
    <div id="myticketInfo-content">
      <div id="myticketInfo-inner">
        <img src="https://ticketimage.interpark.com/Play/image/large/23/23006740_p.gif" />
        <div id="myticketInfo-inner-content">
          <h1>
            뮤지컬 {"<"}오페라의 유령{">"} - 서울
          </h1>
          <p className="myticketInfo">2023.10.10 -</p>
          <p className="myticketInfo">2023.11.19</p>
          <p className="myticketInfo">샤롯데씨어터</p>
          <p className="myticketInfo">관람시간: 150분</p>
        </div>
      </div>

      <div id="choose-info">
        <div id="choose-myinfo">
          <p className="choose-title">MY예매정보</p>
          <div id="choose-title-box">
            <p className="choose-inner-info">관람날짜</p>
            <p className="choose-inner-info">티켓금액</p>
          </div>
        </div>

        <div id="price-box">
          <p className="price-info">총 결제금액</p>
          <p className="price-info">30,000</p>
          <p className="price-info">원</p>
        </div>

        <button
          id="reservation-ing-btn"
          onClick={props.saveCustomerDataHandler}
        >
          예매하기
        </button>
      </div>
    </div>
  );
};

export default MyticketInfo;
