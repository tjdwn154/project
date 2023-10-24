import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "./ReCalendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ReCalendar(props) {
  const [value, onChange] = useState(new Date()); // 현재 날짜
  const navigate = useNavigate();
  const { performanceData } = props;
  const [showSeats, setShowSeats] = useState(false); // 좌석 버튼을 표시할지 여부
  const [selectedDayInfo, setSelectedDayInfo] = useState(null); // 선택한 날짜의 공연 여부
  const [selectedDay, setSelectedDay] = useState(null); // 선택한 요일
  const [selectedTime, setSelectedTime] = useState(null); // 선택한 공연 시간
  const [selectedPrice, setSelectedPrice] = useState(null); // 선택한 좌석의 가격
  const [selectedSeat, setSelectedSeat] = useState(null); // 선택한 좌석
  const dtguidance = performanceData?.dtguidance[0]; // 공연 일정
  const priceData = performanceData?.pcseguidance[0]; // 가격 정보

  useEffect(() => {
    if (dtguidance) {
      const selectedDate = value.toLocaleDateString("ko", { year: "numeric", month: "long", day: "numeric" });
      setSelectedDay(selectedDate); // 선택한 요일 저장
      const selectedDay = value.toLocaleDateString("en-EN", { weekday: "long" });
      // 요일 정보를 영어로 번역
      const translateDtguidance = dtguidance
        .replace(/월요일/g, "Monday")
        .replace(/화요일/g, "Tuesday")
        .replace(/수요일/g, "Wednesday")
        .replace(/목요일/g, "Thursday")
        .replace(/금요일/g, "Friday")
        .replace(/토요일/g, "Saturday")
        .replace(/일요일/g, "Sunday");

      // 공연 일정 정보를 객체로 저장
      const scheduleObject = {};
      const scheduleTimes = translateDtguidance.split(", ");

      scheduleTimes.forEach((part) => {
        const [dayTime, timeString] = part.split("(");
        const times = timeString.replace(")", "").split(",");

        const days = dayTime.includes("~") ? getDaysBetween(dayTime) : [dayTime];

        days.forEach((day) => {
          scheduleObject[day] = times;
        });
      });

      function getDaysBetween(dayTime) {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const [startDay, endDay] = dayTime.split(" ~ ");
        const startIndex = days.indexOf(startDay);
        const endIndex = days.indexOf(endDay);

        return days.slice(startIndex, endIndex + 1);
      }
      console.log(scheduleObject);

      // 선택한 날짜에 대한 공연 시간 정보 확인
      const dayMatches = scheduleObject[selectedDay];
      if (dayMatches) {
        setSelectedDayInfo(dayMatches.join(", "));
      } else {
        setSelectedDayInfo(null); // 선택한 날짜에 공연이 없는 경우 정보 초기화
        setShowSeats(false); // 좌석 버튼 표시 여부 초기화
        setSelectedTime(null); // 선택한 공연 시간 초기화
        setSelectedPrice(null); // 선택한 좌석의 가격 초기화
      }
    }
  }, [value, dtguidance]);

  // 선택한 공연 시간 처리 함수
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setShowSeats(true); // 시간을 선택하면 좌석 버튼 표시
  };

  // 선택한 좌석 처리 함수
  const handleSeatSelection = (seat, price) => {
    setSelectedPrice(price);
    setSelectedSeat(seat);
    setShowSeats(true);
  };

  function CookieValue(cookieName) {
    const cookies = document.cookie.split("; "); // 모든 쿠키를 불러옴
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("="); // "="를 기준으로 cookie[i]를 가져옴
      if (cookie[0] === cookieName) {
        // 현재 쿠키이름과 일치 할 경우
        return cookie[1]; // 쿠키의 값을 반환
      }
    }
    return null; // 해당 쿠키 이름을 찾지 못한 경우
  }

  const handleReserveClick = () => {
    // const memberIdCookie = CookieValue("memberId");

    // if (memberIdCookie) {
    //   // 사용자가 로그인한 경우
    //   // 페이지 이동 및 데이터 전달
    navigate("/ticketBuy", { state: { performanceData, selectedTime, selectedPrice, selectedDay, selectedSeat } });
    //   } else {
    //     // 사용자가 로그인하지 않은 경우
    //     // 로그인 페이지로 이동하도록 할 수 있습니다.
    //     alert("로그인 상태가 아닙니다. 로그인 페이지로 이동합니다.");
    //     navigate("/login"); // 로그인 페이지로 이동
    //   }
  };

  return (
    <div id="re-calendarBox">
      <div className="calendar-text1">관람일</div>
      <Calendar onChange={onChange} value={value} locale="en-EN" />
      <div className="calendar-line"></div>
      <div className="calendar-text2">{selectedDay}</div>
      {selectedDayInfo && (
        <div>
          {selectedDayInfo.split(", ").map((time, index) => (
            <button key={index} className="btn btn-outline-primary" onClick={() => handleTimeSelection(time)}>
              {time}
            </button>
          ))}
        </div>
      )}
      {showSeats && ( // showSeats 상태가 true인 경우에만 좌석 버튼을 표시
        <div className="seat-buttons">
          {priceData &&
            priceData.split(", ").map((dataInfo, index) => {
              const [seat, price] = dataInfo.split(" ");
              return (
                <button
                  key={index}
                  className={`btn btn-outline-primary`}
                  onClick={() => handleSeatSelection(seat, price)}
                >
                  {seat}
                </button>
              );
            })}
        </div>
      )}
      {selectedTime && <div>공연 시간: {selectedTime}</div>}
      {selectedPrice && <div>좌석의 가격: {selectedPrice}</div>}
      {showSeats && selectedTime && selectedPrice && (
        <button class="btn btn-primary btn-lg" onClick={handleReserveClick}>
          예약하기
        </button>
      )}
    </div>
  );
}

export default ReCalendar;
