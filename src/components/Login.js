import React, { useState } from "react";
import axios from "axios";

// 입력받을 데이터들
function Login() {
  const [formData, setFormData] = useState({
    memberId: "",
    memberPw: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/login", formData)
      .then((response) => {
        // 로그인 성공 시 처리
        console.log("로그인 성공", response.data);
        // 로그인 성공 후의 동작을 정의
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error("로그인 실패", error);
        // 로그인 실패 시의 동작을 정의
      });
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디:</label>
          <input type="text" name="memberId" value={formData.memberId} onChange={handleChange} />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" name="memberPw" value={formData.memberPw} onChange={handleChange} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default Login;
