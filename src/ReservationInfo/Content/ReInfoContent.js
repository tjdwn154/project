import "./ReInfoContent.css";

const ReInfoContent = (props) => {
  const { performanceData } = props;
  return (
    <div id="contentBox">
      <img src={performanceData?.poster} alt="포스터"></img>
      <div id="content-in">
        <ul id="ulContent">
          <li>
            <strong className="inLabel">장소</strong>
            <div className="inText">{performanceData?.fcltynm}</div>
          </li>
          <li>
            <strong className="inLabel">공연기간</strong>
            <div className="inText">
              {performanceData?.prfpdfrom} ~ {performanceData?.prfpdto} ({performanceData?.prfstate})
            </div>
          </li>
          <li>
            <strong className="inLabel">공연시간</strong>
            <div className="inText">{performanceData?.prfruntime}</div>
          </li>
          <li>
            <strong className="inLabel">관람연령</strong>
            <div className="inText">{performanceData?.prfage}</div>
          </li>
        </ul>
        <div className="line"></div>
        <div id="addText">
          <ul>
            <li>
              <strong className="addInLabel">공연시간 안내</strong>
              <div className="addInLabel">{performanceData?.dtguidance}</div>
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
