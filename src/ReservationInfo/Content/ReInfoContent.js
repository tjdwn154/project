import "./ReInfoContent.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const ReInfoContent = (props) => {
  const { performanceData } = props;
  return (
    <div id="reinfo-contentBox">
      <img src={performanceData?.poster} alt="포스터"></img>
      <div id="reinfo-content-in">
        <ul id="reinfo-ulContent">
          <li>
            <strong className="reinfo-inLabel">장소</strong>
            <div className="reinfo-inText">{performanceData?.fcltynm}</div>
          </li>

          <li>
            <strong className="reinfo-inLabel">공연시간</strong>
            <div className="reinfo-inText">{performanceData?.prfruntime}</div>
          </li>
          <li>
            <strong className="reinfo-inLabel">관람연령</strong>
            <div className="reinfo-inText">{performanceData?.prfage}</div>
          </li>
          <li>
            <strong className="reinfo-inLabel">티켓가격</strong>
            <div id="reinfo-ticketPrice" className="reinfo-inText">
              {performanceData?.pcseguidance}
            </div>
          </li>
        </ul>
        {/* <div className="reinfo-line"></div> */}
        <div id="reinfo-addText">
          <ul>
            <li>
              <strong className="reinfo-addInLabel">공연시간 안내</strong>
              <div id="reinfo-performTime" className="reinfo-addInLabel">
                {performanceData?.dtguidance}
              </div>
            </li>
            <li>
              <strong className="reinfo-addInLabel">배송정보</strong>
              <div className="reinfo-addInLabel">현장 수령만 가능</div>
            </li>
          </ul>
        </div>
        <Link to="/ticketBuy" id="reinfo-btn">
          <button class="btn btn-primary btn-lg">예약하기</button>
        </Link>
      </div>
    </div>
  );
};

export default ReInfoContent;
