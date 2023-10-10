const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const bcrypt = require("bcrypt"); // 비밀번호 암호화

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

// API 엔드포인트: 로그인
router.post("/api/login", async (req, res) => {
  const { memberId, memberPw } = req.body;

  // 아이디로 사용자 정보 조회
  const selectQuery = "SELECT * FROM member WHERE memberId = ?";
  db.query(selectQuery, [memberId], async (err, results) => {
    if (err) {
      console.error("Error while querying data: " + err);
      res.status(500).json({ message: "로그인에 실패했습니다." });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ message: "아이디가 존재하지 않습니다." });
      return;
    }

    const user = results[0];

    // 비밀번호 비교
    const isPasswordValid = await bcrypt.compare(memberPw, user.memberPw);
    if (!isPasswordValid) {
      res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
      return;
    }

    // 로그인 성공
    res.json({ message: "로그인 성공", user: user });
  });
});

module.exports = router;
