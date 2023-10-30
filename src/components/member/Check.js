import React, { useState, useEffect } from "react";
import axios from "axios";

function Regist() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/members`) // 포트 번호를 3001로 수정
      .then((response) => {
        setMembers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      });
  }, []);

  return (
    <div>
      <h1>Member List</h1>
      <ul>
        {members.map((member) => (
          <li key={member.memberId}>
            <p>이름: {member.memberName}</p>
            <p>아이디: {member.memberId}</p>
            <p>Email: {member.email}</p>
            <p>성별: {member.gender}</p>
            <p>나이: {member.age}</p>
            <p>전화번호: {member.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Regist;
