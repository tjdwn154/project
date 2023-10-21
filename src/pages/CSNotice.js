import React from "react";
import { Table, Pagination } from "react-bootstrap";
export default function CSNotice() {
  return (
    <div id="noticeWrap">
      <h3>공지사항</h3>
      <p>티켓1번가의 공지사항을 확인하세요.</p>
      <div className="boardBox">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
