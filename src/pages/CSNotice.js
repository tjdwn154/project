import React, { useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {CSBoardInfo} from '../util/CSBoardInfo.js';
export default function Notice() {
  let navi=useNavigate();
  const [boardInfo,setBoardInfo] = useState(CSBoardInfo);
  const naviListClick = (i) => {
    const data = {
      boardInfo: boardInfo[i]
    };
    navi(`/cs/notice/${i}`, { state: data });
  };
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
            {boardInfo.map((a, i) => {
              return (
                <tr key={i}
                onClick={() => naviListClick(i)}>
                  <td>{i+1}</td>
                  <td>{a.title}</td>
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
