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

router.get("/api/reservation-check", (req, res) => {
  const sql = "SELECT * FROM reservation"; // 적절한 SQL 쿼리를 사용하여 데이터 검색

  db.query(sql, (err, results) => {
    if (err) {
      console.error("데이터베이스 오류:", err);
      res.status(500).json({ error: "데이터베이스 오류" });
      return;
    }

    res.json(results);
  });
});

module.exports = router;
