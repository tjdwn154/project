const express = require("express");
const router = express.Router();
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// 회원정보 불러오기
router.get("/api/members", (req, res) => {
  const memberId = req.query.memberId;
  const sql = "SELECT * FROM member WHERE memberId = ?";

  db.query(sql, [memberId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "멤버 검색 오류" });
    }
    if (result.length > 0) {
      return res.json(result[0]); // 데이터베이스에서 가져온 정보를 반환
    } else {
      return res.json({ memberId: null });
    }
  });
});

//회원정보 수정
router.put("/api/update-member", (req, res) => {
  const updatedData = req.body;
  const memberId = updatedData.memberId;

  const sql = "UPDATE member SET ? WHERE memberId = ?";

  db.query(sql, [updatedData, memberId], (err, result) => {
    if (err) {
      res.status(500).json({ error: "회원 정보 업데이트 오류" });
    } else {
      res.status(200).json({ message: "회원 정보 업데이트 완료" });
    }
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

router.post("/api/reset-pw", (req, res) => {
  const { memberId, email } = req.body;

  const findUserQuery = "SELECT * FROM member WHERE memberId = ? AND email = ?";

  db.query(findUserQuery, [memberId, email], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: "아이디 검색 오류" });
    }

    if (result.length === 0) {
      return res.json({ success: false, message: "사용자 정보가 없습니다" });
    } else {
      const secretKey = process.env.JWT_KEY;
      const token = jwt.sign({ memberId, email }, secretKey, { expiresIn: "1h" });

      // 이메일 옵션 설정
      const emailTokenLink = `${process.env.CLIENT_URL}/resetPw?token=${token}`;
      const mailOptions = {
        from: "tiket1st@gmail.com",
        to: email,
        subject: "티켓1번가 비밀번호 재설정",
        text: `비밀번호를 재설정하려면 아래 링크를 클릭하세요: ${emailTokenLink}`,
      };

      // 이메일 보내기
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "msj07199@gmail.com", // 보내는 이메일 주소
          pass: "cxco hkfv yten wgpl", // 보내는 이메일 비밀번호(구글 앱 패스워드)
        },
      });

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("이메일 전송 오류: " + error);
          return res.json({ success: false });
        } else {
          console.log("이메일이 성공적으로 전송되었습니다: " + info.response);
          return res.json({ success: true });
        }
      });
    }
  });
});

// 토큰 확인
router.get("/api/check-token/:token", (req, res) => {
  const clientToken = req.params.token;

  jwt.verify(clientToken, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      // 토큰이 유효하지 않은 경우
      return res.json({ success: false, message: "유효하지 않은 토큰" });
    }

    // 토큰이 유효한 경우
    res.json({ success: true, message: "토큰이 유효합니다" });
  });
});

// 비밀번호 변경
router.post("/api/new-pw", async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // JWT 토큰을 검증
    jwt.verify(token, process.env.JWT_KEY, async (err, decoded) => {
      if (err) {
        // 토큰이 유효하지 않은 경우
        return res.status(401).json({ success: false, message: "유효하지 않은 토큰" });
      }
      const { memberId } = decoded; // 디코드된 토큰에서 memberId를 추출

      // 현재 비밀번호 확인 로직 추가
      const checkPasswordQuery = "SELECT memberPw FROM member WHERE memberId = ?";
      db.query(checkPasswordQuery, [memberId], async (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ success: false, message: "비밀번호 확인 오류" });
        }
        if (results.length === 0) {
          return res.status(400).json({ success: false, message: "사용자를 찾을 수 없습니다." });
        }
        const hashedCurrentPassword = results[0].memberPw;

        // 현재 비밀번호 검증
        const isPasswordValid = await bcrypt.compare(newPassword, hashedCurrentPassword);
        if (isPasswordValid) {
          return res.json({
            success: false,
            message: "현재 비밀번호와 새로운 비밀번호가 동일합니다. 다른 비밀번호를 사용해주세요.",
          });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const updatePasswordQuery = "UPDATE member SET memberPw = ? WHERE memberId = ?";
        db.query(updatePasswordQuery, [hashedPassword, memberId], (err, result) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ success: false, message: "비밀번호 업데이트 오류" });
          }
          res.json({ success: true, message: "비밀번호가 성공적으로 변경되었습니다" });
        });
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, message: "유효하지 않은 토큰" });
  }
});

module.exports = router;
