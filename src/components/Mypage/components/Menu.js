import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <p className="name">
        <Link>나의정보</Link>
      </p>
      <div>
        <ul className="sub1">
          <li>
            <Link to="/mypage/check">예매내역</Link>
          </li>
          <li>
            <Link to="/mypage/cancel">취소/환불내역</Link>
          </li>
          <li>
            <Link to="/mypage/epilogue">나의 이용후기</Link>
          </li>
          <li>
            <Link to="/mypage/point">나의 포인트</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="sub2">
          <li>
            <Link to="/mypage/coupon">쿠폰/상품권 등록</Link>
          </li>
          <li>
            <Link to="/mypage/change">회원정보 수정</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="sub3">
          <li>
            <Link to="/mypage/notice">공지사항</Link>
          </li>
          <li>
            <Link to="/mypage/qs">자주묻는질문</Link>
          </li>
          <li>
            <Link to="/mypage/reference">1:1문의</Link>
          </li>
        </ul>
        <div>
          <button type="button" className="subBtn">
            {/* 쿠폰입력 */}
            <p>친구들 초대하면 1,000P 드려요!</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
