import React, { useState, useEffect } from "react";
import { CookieValue } from "../../../util/cookieutil";
import axios from "axios";
import { generateUniqueNumber } from "../../../util/ReservationNum";
import "./Check.css";
import { Link } from "react-router-dom";

function Check() {
  const [data, setData] = useState([]);
  const memberId = CookieValue("memberId");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/reservation-check?memberId=${memberId}`)
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
  }, [memberId]);

  // 예매 취소 함수
  const cancelReservation = async (reservationNumber) => {
    try {
      // 새로운 환불 정보
      const canceledReservation = data.find((reservation) => reservation.reservationNumber === reservationNumber);
      const refundNumber = generateUniqueNumber();
      const memberId = canceledReservation.memberId;
      const performanceName = canceledReservation.performanceName;
      const refundPrice = canceledReservation.selectedPrice;
      const refundDate = new Date().toISOString().split("T")[0];
      const refundData = {
        refundNumber,
        reservationNumber,
        memberId,
        performanceName,
        refundPrice,
        refundDate,
      };
      await axios.post(`${process.env.REACT_APP_API_URL}/api/add-refund`, refundData);

      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/cancel-reservation?reservationNumber=${reservationNumber}`
      );
    } catch (error) {
      console.error("예매 취소 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <>
      <p className="name2">예매내역</p>
      <div className="table-container">
        {data.length > 0 ? (
          <>
            <p>{data[0].memberId}님</p>
            <p>총 {data.length}개의 예매내역이 있습니다.</p>
          </>
        ) : (
          <p>예매내역이 없습니다.</p>
        )}

        <table className="table-style">
          <thead>
            <tr>
              <th className="th-style">예매 번호</th>
              <th className="th-style">공연 제목</th>
              <th className="th-style">공연 위치</th>
              <th className="th-style">예매 일자</th>
              <th className="th-style">공연 시간</th>
              <th className="th-style">결제 가격</th>
              <th className="th-style">예매 취소</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reservation, index) => (
              <tr key={index}>
                <td className="td-style">{reservation.reservationNumber}</td>
                <td className="td-style">
                  <Link to={`/Reservation/${reservation.performanceId}`}>{reservation.performanceName}</Link>
                </td>
                <td className="td-style">{reservation.venue}</td>
                <td className="td-style">{reservation.selectedDay}</td>
                <td className="td-style">{reservation.selectedTime}</td>
                <td className="td-style">{reservation.selectedPrice}</td>
                <td className="td-style">
                  <button className="bt-style" onClick={() => cancelReservation(reservation.reservationNumber)}>
                    예매 <br />
                    취소
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Check;
