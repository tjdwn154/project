import React, { useEffect, useState } from "react";
import { CookieValue } from "../../../util/cookieutil";
import axios from "axios";

function Cancel() {
  const [data, setData] = useState([]);
  const memberId = CookieValue("memberId");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/refund-check?memberId=${memberId}`)
      .then((response) => {
        const reservations = response.data;
        // 날짜를 한국 시간으로 변환
        const transReservations = reservations.map((reservation) => ({
          ...reservation,
          refundDate: new Date(reservation.refundDate).toLocaleString("ko", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }));
        setData(transReservations);
      })
      .catch((error) => {
        console.error("예매 정보를 불러오는 중 오류가 발생했습니다.", error);
      });
  }, [memberId]);

  return (
    <div>
      <p className="name2">취소/환불내역</p>
      <div className="table-container">
        {data.length > 0 ? (
          <>
            <p>{data[0].memberId}님</p>
            <p>총 {data.length}개의 예매 취소 내역이 있습니다.</p>
          </>
        ) : (
          <p>예매 취소 내역이 없습니다.</p>
        )}

        <table className="table-style">
          <thead>
            <tr>
              <th className="th-style">예매취소 번호</th>
              <th className="th-style">공연 제목</th>
              <th className="th-style">환불 일자</th>
              <th className="th-style">환불 가격</th>
            </tr>
          </thead>
          <tbody>
            {data.map((reservation, index) => (
              <tr key={index}>
                <td className="td-style">{reservation.refundNumber}</td>
                <td className="td-style">{reservation.performanceName}</td>
                <td className="td-style">{reservation.refundDate}</td>
                <td className="td-style">{reservation.refundPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cancel;
