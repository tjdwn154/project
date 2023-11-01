const express = require("express");
const router = express.Router();
const axios = require("axios");
const { parseXML } = require("./parseXML");

// KOPIS API(공연 정보) 요청 함수
async function ParseAPI() {
  const today = new Date();
  const formatstdate = today.toISOString().slice(0, 10).replace(/-/g, "");

  const apiUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${process.env.KOPIS_API}&stdate=${formatstdate}&eddate=20240301&cpage=1&rows=10&prfstate=02&`;
  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
}

// API 데이터 가져오는 엔드포인트
router.get("/api/data", async (req, res) => {
  try {
    const apiData = await ParseAPI();
    res.json(apiData);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

async function SearchAPI(searchTerm) {
  const today = new Date();
  const formatstdate = today.toISOString().slice(0, 10).replace(/-/g, "");

  const apiUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr?service=${process.env.KOPIS_API}&stdate=${formatstdate}&eddate=20240301&cpage=1&rows=10&prfstate=02&shprfnm=${searchTerm}`;
  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
}

router.get("/api/data/:searchTerm", async (req, res) => {
  const searchTerm = req.params.searchTerm; // URL 경로에서 searchTerm 매개변수를 가져옵니다.
  try {
    const apiData = await SearchAPI(searchTerm);
    res.json(apiData);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

module.exports = router;
