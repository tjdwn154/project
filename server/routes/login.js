const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // 비밀번호 암호화
const db = require("./db");

// API 엔드포인트: 로그인
router.post("/api/login", async (req, res) => {
  const { memberId, memberPw } = req.body;

  // 아이디로 사용자 정보 조회
  const selectQuery = "SELECT * FROM member WHERE memberId = ?";
  db.query(selectQuery, [memberId], async (err, results) => {
    if (err) {
      console.error("에러: " + err);
      res.status(500).json({ message: "로그인에 실패했습니다." });
      return;
    } else if (results.length === 0) {
      res.status(401).json({ message: "아이디가 존재하지 않습니다." });
      return;
    } else {
      const user = results[0];

      // 비밀번호 비교(사용자가 입력한 pw, DB에 저장된 pw)
      const isPasswordValid = await bcrypt.compare(memberPw, user.memberPw);
      if (!isPasswordValid) {
        res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
        return;
      } else {
        // 사용자 인증 성공: 세션 설정
        req.session.user = user;
        res.cookie("user", user.memberId);
        res.json({ message: "로그인 성공" });
      }
    }
  });
});

// 로그아웃 요청 처리
router.post("/api/logout", (req, res) => {
  // 세션 해제
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: "로그아웃 실패" });
    } else {
      res.json({ message: "로그아웃 성공" });
    }
  });
});

module.exports = router;
