import React from "react";

function Reference() {
  function clickHandler() {
    alert('제출되었습니다.')
  }
  return (
    <>
      <p className="name2">1:1 문의하기</p>
      <div className="MypageRf">
        <table>       
          <tbody>
            <tr>
              <th className="MypageRow">상담분류</th>
              <td>
                <div className="fArea">
                  <div className="formWrap">
                    {/* <ins>
                      대분류선택
                    </ins> */}
                    <select className="select01">
                      <option>선택해주세요</option>
                      <option>회원정보</option>
                      <option>거래방법</option>
                      <option>거래취소/신고/보류</option>
                      <option>결제 및 환불</option>
                      <option>출금</option>
                      <option>서비스 이용</option>
                      <option>입장안심 서비스</option>
                      <option>팬딩(FANding)</option>
                    </select>
                  </div>
                  {/* <div>
                    <ins>
                      소분류선택
                    </ins>
                  </div> */}
                </div>
              </td>
            </tr>
            <tr>
              <th className="MypageRow">주문정보</th>
              <td>
                <input type="text" className="textInp" id="ORDER_REFERENCE" readOnly></input>
                <a>
                  <button className="RfAbout">주문상품조회</button>
                </a>
              </td>
            </tr>
            <tr>
              <th className="MypageRow">제목</th>
              <td>
                <input type="text" className="textInp01"></input>
              </td>
            </tr>
            <tr>
              <th className="MypageRow">답변알림요청</th>
              <td>
                <div>
                  <div className="email">
                    {/* db에서 이메일 가져오기 */}
                    <em className="noticeEmail">callMe@112</em>
                    <a href="#">
                      <button className="about01">이메일수정</button>
                    </a>
                    <div>
                      <label className="label01">
                        <input type="checkbox"></input>
                        <span className="emailCheck">이메일로 알림 받기</span>
                      </label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="MypageRow">문의 내용</th>
              <td>
                <textarea title="문의내용 입력" className="textarea01" placeholder=""></textarea>
              </td>
            </tr>
            <tr>
              <th className="MypageRow">파일첨부</th>
              <td>
                <div className="fileBlock">
                  <input type="text" id="imageAdd1" readOnly className="img01"></input>
                  <a href="#">
                    <button className="RfBtn">찾아보기</button>
                  </a>
                </div>
                <div className="fileBlock">
                  <input type="text" id="imageAdd2" readOnly className="img01"></input>
                  <a href="#">
                    <button className="RfBtn">찾아보기</button>
                  </a>
                </div>
                <div className="fileBlock">
                  <input type="text" id="imageAdd3" readOnly className="img01"></input>
                  <a href="#">
                    <button className="RfBtn">찾아보기</button>
                  </a>
                </div>
                <p className="imgImf">
                  10MB 이하의 파일 3개까지 첨부하실 수 있으며 jpg, png, gif, pdf 파일형식만 첨부하실 수 있습니다.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="btnArea">
        <div>
          <a className="RfSubmitBtn">
            <button onClick={clickHandler} className="RfSubmitBtn">문의하기</button>
          </a>
        </div>
      </div>
      {/* footer */}
      <footer></footer>
    </>
  );
}

export default Reference;
