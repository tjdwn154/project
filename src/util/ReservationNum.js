// 예매일자(YYMMDD)를 생성합니다.
function generateFormattedDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return year + month + day;
}

// 여섯 자리의 랜덤 숫자 생성
function generateRandomNumber() {
  return Math.floor(100000 + Math.random() * 900000); // 100000부터 999999 사이의 랜덤 숫자
}

// 중복되지 않는 예매 번호 생성
function generateUniqueNumber() {
  const generatedNumbers = []; // 예매번호를 저장할 배열
  const formattedDate = generateFormattedDate();
  let randomNumber;

  do {
    randomNumber = generateRandomNumber();
  } while (generatedNumbers.includes(randomNumber));

  generatedNumbers.push(randomNumber); // 중복되지 않은 번호 저장
  return `${formattedDate}-${randomNumber}`;
}

export { generateUniqueNumber };
