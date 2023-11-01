const express = require("express");
const router = express.Router();
const db = require("./db");

// 리뷰 권한 확인 페이지
router.get("/api/review-check", (req, res) => {
  const memberId = req.query.memberId;
  const performanceId = req.query.performanceId;
  const sql = "SELECT * FROM reservation WHERE memberId = ? AND performanceId = ?";

  db.query(sql, [memberId, performanceId], (err, results) => {
    if (err) {
      console.error("데이터베이스 오류:", err);
      res.status(500).json({ error: "데이터베이스 오류" });
      return;
    }
    res.json(results);
  });
});

// 리뷰 작성
router.post("/api/add-review", (req, res) => {
  const { memberId, performanceId, reviewTitle, reviewContent, reviewDate } = req.body;
  console.log(performanceId);
  const sql =
    "INSERT INTO review (memberId, performanceId, reviewTitle, reviewContent, reviewDate) VALUES (?, ?, ?, ?, ?)";
  const values = [memberId, performanceId, reviewTitle, reviewContent, reviewDate];

  db.query(sql, values, (error, results) => {
    if (error) {
      console.error("리뷰 저장 중 오류 발생:", error);
      res.status(500).json({ message: "리뷰 저장 중 오류 발생" });
    } else {
      res.status(201).json({ message: "리뷰가 성공적으로 저장되었습니다." });
    }
  });
});

// 리뷰 불러오기
router.get("/api/reviews", (req, res) => {
  const performanceId = req.query.performanceId;
  const sql = "SELECT * FROM review WHERE performanceId = ?";

  db.query(sql, [performanceId], (error, results) => {
    if (error) {
      console.error("리뷰 불러오기 중 오류: ", error);
      res.status(500).json({ message: "리뷰 불러오기 중 오류 발생" });
    } else {
      res.status(201).json({ results, message: "리뷰를 성공적으로 불러왔습니다." });
    }
  });
});

// 나의 리뷰 보기
router.get("/api/my-review", (req, res) => {
  const memberId = req.query.memberId;
  const sql = "SELECT * FROM review WHERE memberId = ?";

  db.query(sql, [memberId], (error, results) => {
    if (error) {
      console.error("나의 리뷰 불러오기 중 오류: ", error);
      res.status(500).json({ message: "나의 리뷰 불러오기 중 오류 발생" });
    } else {
      res.status(201).json({ results, message: "나의 리뷰를 성공적으로 불러왔습니다." });
    }
  });
});

module.exports = router;
