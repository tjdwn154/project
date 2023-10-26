import React, { useState, useEffect } from "react";
import { CookieValue } from "../../../util/cookieutil";
import axios from "axios";
import "./Check.css";

function Check() {
  const [data, setData] = useState([]);
  const memberId = CookieValue("memberId");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/reservation-check?memberId=${memberId}`)
      .then((response) => {
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
      })
      .catch((error) => {
        console.error("예매 정보를 불러오는 중 오류가 발생했습니다.", error);
      });
  }, []);

  return (
    <>
      <p className="name2">예매내역</p>
      <div className="table-container">
        <p>총 {data.length}개의 예매내역이 있습니다.</p>
        <table className="table-style">
          <thead>
            <tr>
              <th className="th-style">공연 제목</th>
              <th className="th-style">공연 위치</th>
              <th className="th-style">예매 일자</th>
              <th className="th-style">공연 시간</th>
              <th className="th-style">아이디</th>
              <th className="th-style">결제 가격</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reservation, index) => (
              <tr key={index}>
                <td className="td-style">{reservation.performanceName}</td>
                <td className="td-style">{reservation.venue}</td>
                <td className="td-style">{reservation.selectedDay}</td>
                <td className="td-style">{reservation.selectedTime}</td>
                <td className="td-style">{reservation.memberId}</td>
                <td className="td-style">{reservation.selectedPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Check;
