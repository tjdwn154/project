import React, { useState } from "react";
import axios from "axios";

// 입력받을 데이터들
function SignUp() {
  const [formData, setFormData] = useState({
    memberId: "",
    memberPw: "",
    memberName: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
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
      .post("http://localhost:3001/api/signup", formData)
      .then((response) => {
        // 회원가입 성공 시 처리
        console.log("회원가입 성공", response.data);
        // TODO: 회원가입 성공 메시지를 사용자에게 표시하거나, 로그인 페이지로 이동하는 등의 작업 수행
      })
      .catch((error) => {
        // 회원가입 실패 시 처리
        console.error("회원가입 실패", error);
        // TODO: 회원가입 실패 메시지를 사용자에게 표시하거나, 오류 처리를 수행
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아이디:</label>
          <input type="text" name="memberId" value={formData.memberId} onChange={handleChange} />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" name="memberPw" value={formData.memberPw} onChange={handleChange} />
        </div>
        <div>
          <label>이름:</label>
          <input type="text" name="memberName" value={formData.memberName} onChange={handleChange} />
        </div>
        <div>
          <label>이메일:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>나이:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>성별:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="M">남성</option>
            <option value="F">여성</option>
          </select>
        </div>
        <div>
          <label>전화번호:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}

export default SignUp;
