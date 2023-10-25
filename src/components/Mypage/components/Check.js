import React, { useState, useEffect } from "react";
import axios from "axios";

function Check() {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    // 다른 CSS 스타일 속성 추가 가능
  };
  const thStyle = {
    border: "1px solid #dddddd",
    textAlign: "center",
    padding: "8px",
    backgroundColor: "#f2f2f2",
    // 다른 스타일 추가 가능
  };
  const tdStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
    // 다른 스타일 추가 가능
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    // 서버에서 예매 정보를 가져오는 함수
    const fetchReservations = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/reservation-check");
        const reservations = response.data;

        // 날짜를 한국 시간으로 변환
        const transReservations = reservations.map((reservation) => ({
          ...reservation,
          selectedDay: new Date(reservation.selectedDay).toLocaleString("ko", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          selectedTime: reservation.selectedTime.slice(0, -3), // '00' 제거
        }));

        setData(transReservations);
      } catch (error) {
        console.error("예매 정보를 불러오는 중 오류가 발생했습니다.", error);
      }
    };

    // 예매 정보 불러오기
    fetchReservations();
  }, []);

  return (
    <>
      <p className="name2">예매내역</p>
      <div>
        <p>총 {data.length}개의 예매내역이 있습니다.</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>제목</th>
              <th style={thStyle}>위치</th>
              <th style={thStyle}>가격</th>
              <th style={thStyle}>일자</th>
              <th style={thStyle}>공연시간</th>
              <th style={thStyle}>예매상태</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reservation, index) => (
              <tr key={index}>
                <td style={tdStyle}>{reservation.performanceName}</td>
                <td style={tdStyle}>{reservation.venue}</td>
                <td style={tdStyle}>{reservation.selectedPrice}</td>
                <td style={tdStyle}>{reservation.selectedDay}</td>
                <td style={tdStyle}>{reservation.selectedTime}</td>
                <td style={tdStyle}>{/* 예매 상태 데이터 추가 */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Check;
