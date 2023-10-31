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

module.exports = router;
