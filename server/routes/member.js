const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/api/members", (req, res) => {
  db.query("SELECT * FROM member", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// 아이디 찾기
router.get("/api/find-id", (req, res) => {
  const email = req.query.email;
  const phone = req.query.phone;

  const findId = "SELECT memberId FROM member WHERE email = ? AND phone = ?";

  db.query(findId, [email, phone], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "아이디 검색 오류" });
    }

    if (result.length > 0) {
      const memberId = result[0].memberId;
      return res.json({ memberId });
    } else {
      return res.json({ memberId: null });
    }
  });
});

module.exports = router;
