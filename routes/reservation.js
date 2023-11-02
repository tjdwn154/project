const express = require("express");
const router = express.Router();
const db = require("./db");

router.post("/api/reservation", (req, res) => {
  const { reservationNumber, performanceData, selectedTime, selectedDay, selectedPrice, memberId } = req.body;

  //'yyyy-mm-dd'으로 변환
  const parts = selectedDay.match(/(\d+)/g);
  const formattedDay = `${parts[0]}-${parts[1]}-${parts[2]}`;

  // 런타임 값을 'hh:mm:ss'으로 변환하는 함수
  function parseRuntime(runtime) {
    const hoursMatch = runtime.match(/(\d+)시간/);
    const minutesMatch = runtime.match(/(\d+)분/);

    const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    const formattedRuntime = `${formattedHours}:${formattedMinutes}:00`;

    return formattedRuntime;
  }

  const runtime = performanceData.prfruntime.toString();
  const formattedRuntime = parseRuntime(runtime);

  const sql =
    "INSERT INTO reservation (reservationNumber, performanceId, memberId, performanceName, runtime, venue, selectedTime, selectedDay, selectedPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    reservationNumber,
    performanceData.mt20id, // 공연 번호
    memberId, // 회원 아이디
    performanceData.prfnm, // 공연 이름
    formattedRuntime, // 공연 런타임
    performanceData.fcltynm, // 공연 장소
    selectedTime, // 선택한 공연 시간
    formattedDay, // 선택한 공연 날짜
    selectedPrice[0], // 가격
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("데이터베이스 오류:", err);
      res.status(500).send("데이터베이스 오류");
    } else {
      // 데이터베이스에 추가 성공
      res.send("예약이 완료되었습니다.");
    }
  });
});

// 예매 확인 페이지
router.get("/api/reservation-check", (req, res) => {
  const memberId = req.query.memberId;
  const sql = "SELECT * FROM reservation WHERE memberId = ?";

  db.query(sql, [memberId], (err, results) => {
    if (err) {
      console.error("데이터베이스 오류:", err);
      res.status(500).json({ error: "데이터베이스 오류" });
      return;
    }
    res.json(results);
  });
});

// 예매 취소
router.delete("/api/cancel-reservation", (req, res) => {
  const { reservationNumber } = req.query;
  const deleteSql = "DELETE FROM reservation WHERE reservationNumber = ?";

  db.query(deleteSql, [reservationNumber], (err, results) => {
    if (err) {
      console.error("예매 취소 중 오류가 발생했습니다.", err);
      res.status(500).json({ error: "예매 취소 중 오류가 발생했습니다." });
    } else {
      res.status(200).json({ message: "예매가 취소되었습니다." });
    }
  });
});

// 예매 취소 정보
router.post("/api/add-refund", (req, res) => {
  const { refundNumber, reservationNumber, memberId, performanceName, refundPrice, refundDate } = req.body;
  const sql =
    "INSERT INTO refund (refundNumber, reservationNumber, memberId, performanceName, refundPrice, refundDate) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [refundNumber, reservationNumber, memberId, performanceName, refundPrice, refundDate];
  // MySQL 데이터베이스에 환불 정보 저장
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("환불 정보를 저장하는 중 오류가 발생했습니다.");
      res.status(500).json({ error: "환불 정보 저장 실패" });
      return;
    }
    console.log("환불 정보가 성공적으로 저장되었습니다.");
    res.status(200).json({ message: "환불 정보 저장 성공" });
  });
});

router.get("/api/refund-check", (req, res) => {
  const memberId = req.query.memberId;
  const sql = "SELECT * FROM refund WHERE memberId = ?";

  db.query(sql, [memberId], (err, results) => {
    if (err) {
      console.error("데이터베이스 오류:", err);
      res.status(500).json({ error: "데이터베이스 오류" });
      return;
    }

    res.json(results);
  });
});

module.exports = router;
