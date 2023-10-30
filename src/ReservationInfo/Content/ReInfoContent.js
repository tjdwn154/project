import "./ReInfoContent.css";
import { useNavigate } from "react-router-dom";

const ReInfoContent = (props) => {
  const { performanceData } = props;
  const navigate = useNavigate();

  const handleReserveClick = () => {
    // 페이지 이동 및 데이터 전달
    navigate("/ticketBuy", { state: { performanceData } });
  };
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
        <div id="reinfo-addText">
          <ul>
            <li className="reinfo-li">
              <strong className="reinfo-addInLabel">공연시간 안내</strong>
              <div id="reinfo-performTime" className="reinfo-addInLabel">
                {performanceData?.dtguidance}
              </div>
            </li>
            <li className="reinfo-li">
              <strong className="reinfo-addInLabel">배송정보</strong>
              <div className="reinfo-addInLabel">현장 수령만 가능</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReInfoContent;
