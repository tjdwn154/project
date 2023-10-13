import "./ReInfoContent.css";

const ReInfoContent = () => {
  return (
    <div id="contentBox">
      <img src="https://ticketimage.interpark.com/Play/image/large/23/23006740_p.gif"></img>
      <div id="content-in">
        <ul id="ulContent">
          <li>
            <strong className="inLabel">장소</strong>
            <div className="inText">샤롯데씨어터</div>
          </li>
          <li>
            <strong className="inLabel">공연기간</strong>
            <div className="inText">2023.07.21 ~2023.11.19</div>
          </li>
          <li>
            <strong className="inLabel">공연시간</strong>
            <div className="inText">150분(인터미션 20분 포함)</div>
          </li>
          <li>
            <strong className="inLabel">관람연령</strong>
            <div className="inText">초등학생이상 관람가</div>
          </li>
        </ul>
        <div className="line"></div>
        <div id="addText">
          <ul>
            <li>
              <strong className="addInLabel">공연시간 안내</strong>
              <div className="addInLabel">2023년 10월 07일</div>
            </li>
            <li>
              <strong className="addInLabel">배송정보</strong>
              <div className="addInLabel">현장 수령만 가능</div>
            </li>
          </ul>
        </div>
        <div id="btn">
          <button class="btn btn-primary btn-lg">예약하기</button>
        </div>
      </div>
    </div>
  );
};

export default ReInfoContent;
