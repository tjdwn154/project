const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

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

// API 엔드포인트: 회원가입
router.post("/api/signup", async (req, res) => {
  try {
    const { memberId, memberPw, memberName, email, gender, age, phone } = req.body;

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(memberPw, 10);

    // 데이터베이스에 회원 정보 저장
    const insertQuery =
      "INSERT INTO member (memberId, memberPw, memberName, email, gender, age, phone) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(insertQuery, [memberId, hashedPassword, memberName, email, gender, age, phone], (err, result) => {
      if (err) {
        console.error("Error while inserting data: " + err);
        throw err;
      }
      console.log("User registered:", memberId);
      res.status(201).json({ message: "회원가입이 완료되었습니다." });
    });
  } catch (error) {
    console.error("Error during registration: " + error);
    res.status(500).json({ message: "회원가입에 실패했습니다." });
  }
});

module.exports = router;
