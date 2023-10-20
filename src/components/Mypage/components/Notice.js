import React from "react";

function Notice() {
  return (
    <>
      <p className="name2">공지사항</p>
      <div className="noticeBox">
        <table class="table">
          <thead>
            <tr>
              <th scope="col1">분류</th>
              <th scope="col2">제목</th>
              <th scope="col3">등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>공지</th>
              <td>제목입니당</td>
              <td>2023-10-20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Notice;
