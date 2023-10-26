function CookieValue(cookieName) {
  const cookies = document.cookie.split("; "); // 모든 쿠키를 불러옴
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("="); // "="를 기준으로 cookie[i]를 가져옴
    if (cookie[0] === cookieName) {
      // 현재 쿠키이름과 일치 할 경우
      return cookie[1]; // 쿠키의 값을 반환
    }
  }
  return null; // 해당 쿠키 이름을 찾지 못한 경우
}

export { CookieValue }; // 함수를 모듈로 내보내기
