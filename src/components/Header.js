import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="headerWrap" style={{ display: "flex" }}>
      <div style={{ marginRight: "10px" }}>
        <Link to="/signup">회원가입</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
}
