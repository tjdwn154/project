import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./ReCalendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ReCalendar(props) {
  const [value, onChange] = useState(new Date());
  const { performanceData } = props;
  const [selectedDayInfo, setSelectedDayInfo] = useState(null);

  const dtguidance = performanceData?.dtguidance[0]; // 공연일
  const priceData = performanceData?.pcseguidance[0]; // 가격
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    if (dtguidance) {
      const selectedDay = value.toLocaleDateString("en-EN", { weekday: "long" });
      const translateDtguidance = dtguidance
        .replace(/월요일/g, "Monday")
        .replace(/화요일/g, "Tuesday")
        .replace(/수요일/g, "Wednesday")
        .replace(/목요일/g, "Thursday")
        .replace(/금요일/g, "Friday")
        .replace(/토요일/g, "Saturday")
        .replace(/일요일/g, "Sunday");

      // console.log(translateDtguidance);
      // console.log(`요일: ${selectedDay}`);

      // 정규 표현식을 수정하여 모든 시간을 추출
      const dayMatches = translateDtguidance.match(
        new RegExp(`${selectedDay}\\((\\d{2}:\\d{2}(?:,\\d{2}:\\d{2})*)\\)`)
      );
      if (dayMatches) {
        const showTimes = dayMatches[1].split(",");
        setSelectedDayInfo(`선택한 날짜의 공연 시간: ${showTimes.join(", ")}`);
      } else {
        setSelectedDayInfo(null); // 선택한 날짜에 공연이 없는 경우 정보를 초기화
      }
    }
  }, [value, dtguidance]);

  const handleSeatSelection = (seatPrice) => {
    setSelectedPrice(seatPrice);
  };

  return (
    <div id="re-calendarBox">
      <div className="calendar-text1">관람일</div>
      <Calendar onChange={onChange} value={value} locale="en-EN" />
      <div className="calendar-line"></div>
      <div className="calendar-text2">회차</div>
      {selectedDayInfo && <div>{selectedDayInfo}</div>}
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
