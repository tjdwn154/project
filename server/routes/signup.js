const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("./db");

// API 엔드포인트: 회원가입
router.post("/api/signup", async (req, res) => {
  try {
    const { memberId, memberPw, memberName, email, gender, phone } = req.body;

    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(memberPw, 10);

    // 데이터베이스에 회원 정보 저장
    const insertQuery =
      "INSERT INTO member (memberId, memberPw, memberName, email, gender, phone) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(insertQuery, [memberId, hashedPassword, memberName, email, gender, phone], (err, result) => {
      if (err) {
        throw err;
      }
      console.log("회원가입 완료:", memberId);
      res.status(201).json({ message: "회원가입이 완료되었습니다." });
    });
  } catch (error) {
    console.error("회원가입 오류: " + error);
    res.status(500).json({ message: "회원가입에 실패했습니다." });
  }
});

// 중복 검사 API
router.get("/api/check-id", (req, res) => {
  const memberId = req.query.memberId;

  const checkId = "SELECT COUNT(*) as count FROM member WHERE memberId = ?";
  db.query(checkId, [memberId], (err, checkResult) => {
    if (err) {
      return res.status(500).json({ error: "아이디 중복 검사 오류" });
    }

    const exists = checkResult[0].count > 0;

    res.json({ exists });
  });
});

module.exports = router;
