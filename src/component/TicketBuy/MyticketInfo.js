import "./MyticketInfo.css";

const MyticketInfo = () => {
  return (
    <div id="myticketInfo-content">
      <div>
        <img src="https://ticketimage.interpark.com/Play/image/large/23/23006740_p.gif" />
        <div>
          <h1>
            뮤지컬 {"<"}오페라의 유령{">"} - 서울
          </h1>
          <p>2023.10.10 -</p>
          <p>2023.11.19</p>
          <p>샤롯데씨어터</p>
          <p>관람시간: 150분</p>
        </div>
      </div>

      <div>
        <div>
          <p>MY예매정보</p>
          <div>
            <p>선택좌석</p>
            <p>티켓금액</p>
          </div>
        </div>

        <div>
          <p>총 결제금액</p>
          <p>30,000</p>
          <p>원</p>
        </div>

        <button>예매하기</button>
      </div>
    </div>
  );
};

export default MyticketInfo;
