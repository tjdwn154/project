const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tjdwnrk1541",
  database: "project",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

// API 엔드포인트: 멤버 정보 가져오기
router.get("/api/members", (req, res) => {
  db.query("SELECT * FROM member", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
