const express = require("express");
const router = express.Router();
const axios = require("axios");
const { parseXML } = require("./parseXML");

const performanceData = async (mt20id) => {
  const apiUrl = `http://www.kopis.or.kr/openApi/restful/pblprfr/${mt20id}?service=${process.env.KOPIS_API}`;

  const response = await axios.get(apiUrl);
  const result = await parseXML(response.data);

  return result;
};

router.get("/api/pblprfr/:mt20id", async (req, res) => {
  const { mt20id } = req.params;
  try {
    const result = await performanceData(mt20id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "API 연결 에러" });
  }
});

module.exports = router;
