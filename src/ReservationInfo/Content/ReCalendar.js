import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ReCalendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ReCalendar(props) {
  const [value, onChange] = useState(new Date());
  const { performanceData } = props;

  const dtguidance = performanceData?.dtguidance[0]; // 공연일
  console.log("공연일 :", dtguidance); // 화요일(19:30), 수요일(14:30,19:30), 목요일 ~ 금요일(19:30), 토요일 ~ 일요일(14:00,19:00)
  console.log(value.toDateString()); // Tue Oct 24 2023

  const priceData = performanceData?.pcseguidance[0];
  console.log("가격 :", priceData); // VIP석 180,000원, R석 150,000원, S석 120,000원, A석 90,000원
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleSeatSelection = (seatPrice) => {
    setSelectedPrice(seatPrice);
  };

  return (
    <div id="re-calendarBox">
      <div className="calendar-text1">관람일</div>
      <Calendar onChange={onChange} value={value} locale="en-EN" />
      <div className="calendar-line"></div>
      <div className="calendar-text2">회차</div>
      <button className="btn btn-outline-primary">1회: 19:30</button>

      <div className="seat-buttons">
        {priceData &&
          priceData.split(", ").map((dataInfo, index) => {
            const [seat, price] = dataInfo.split(" ");
            return (
              <button key={index} className={`btn btn-outline-primary`} onClick={() => handleSeatSelection(price)}>
                {seat}
              </button>
            );
          })}
      </div>
      {selectedPrice && <div>좌석의 가격: {selectedPrice}</div>}
    </div>
  );
}

export default ReCalendar;
