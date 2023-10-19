import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
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

  const memberId = CookieValue("memberId");
  // 쿠키에서 memberId 값을 추출

  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post("http://localhost:3001/api/logout")
      .then((response) => {
        if (response.data.message === "로그아웃 성공") {
          // 쿠키를 삭제 로직
          document.cookie = "memberId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("로그아웃 실패", error);
      });
  };

  return (
    <div id="headerWrap" style={{ display: "flex" }}>
      {memberId ? (
        <div style={{ marginRight: "10px" }}>
          <Link to="/mypage">마이페이지</Link>
        </div>
      ) : (
        <div style={{ marginRight: "10px" }}>
          <Link to="/signup">회원가입</Link>
        </div>
      )}
      {memberId ? (
        <div>
          <Link onClick={handleLogout}>로그아웃</Link>
        </div>
      ) : (
        <div>
          <Link to="/login">로그인</Link>
        </div>
      )}
    </div>
  );
}
