import React from "react";
import { Link } from "react-router-dom";

function SearchId () {
  return(
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">        
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
        <h1 className="text-body-emphasis" style={{marginTop:"50px"}}>
          본인확인이 필요한 서비스 입니다.
        </h1>
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          본인 인증을 진행해주세요.
        </p>
        <div className="d-inline-flex gap-2 mb-5">
          <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
            휴대폰 인증
          </button>
          <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
            이메일 인증
          </button>
        </div>
        <div>
          <h2>비밀번호를 찾으시나요?</h2>
          <Link to="/SearchPw">비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  )
}



export default SearchId; 