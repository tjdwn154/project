const express = require("express");
const router = express.Router();
const axios = require("axios");
const { parseXML } = require("./parseXML");

// KOPIS API(박스오피스 정보) 요청 함수
async function ParseBoxOfficeAPI(catecode) {
  const ststype = "day"; // 일별 예매상황판 목록 요청

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedDate = yesterday.toISOString().slice(0, 10).replace(/-/g, "");

  // 서버에서 받은 catecode 및 어제 날짜를 동적으로 API 주소에 추가
  const apiUrl = `http://www.kopis.or.kr/openApi/restful/boxoffice?service=${process.env.KOPIS_API}&ststype=${ststype}&date=${formattedDate}&catecode=${catecode}`;

  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
}

// API 데이터 가져오는 엔드포인트 (일별 예매상황판 목록)
router.get("/api/boxoffice", async (req, res) => {
  const { catecode } = req.query; // 클라이언트에서 catecode를 쿼리 파라미터로 전달

  try {
    const boxOfficeData = await ParseBoxOfficeAPI(catecode);
    res.json(boxOfficeData);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

module.exports = router;
