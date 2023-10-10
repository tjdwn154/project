import React, { useState, useEffect } from "react";
import axios from "axios";

function Regist() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/members") // 포트 번호를 3001로 수정
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
          <li key={member.memberId}>{member.memberName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Regist;
