const { parseString } = require("xml2js");

// XML 파싱 함수
function parseXML(xmlData) {
  return new Promise((resolve, reject) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        reject({ error: "파싱 에러" });
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { parseXML };
