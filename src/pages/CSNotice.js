import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Notice() {
  const navi = useNavigate();
  const [noticeTitle] = useState([
    "티켓1번가에 오신 것을 환영합니다.",
    "티켓1번가 고객센터 운영시간"
  ]);
  return (
    <div id="noticeWrap">
      <div className="titleBox">
        <h3>공지사항</h3>
        <p>티켓1번가의 공지사항을 확인하세요.</p>
      </div>
      <div className="boardBox">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {noticeTitle.map((a, i) => {
              return (
                <tr
                  onClick={() => {
                    navi(`/cs/notice/${i}`, {
                      state: noticeTitle[i]
                    });
                  }}
                  i={i}
                >
                  <td>{i}</td>
                  <td>{noticeTitle[i]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
