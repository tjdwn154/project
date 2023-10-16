import "./CustomerCheck.css";

const CustomerCheck = () => {
  return (
    <div id="customerContent">
      <h2>예매자 확인</h2>
      <form id="customerForm">
        <ul>
          <li className="customer-formList">
            <label id="name">이름</label>
            <input id="name" type="text" maxLength="4" required />
          </li>
          <li className="customer-formList">
            <label id="birth">생년월일</label>
            <input
              id="birth"
              type="text"
              required
              minLength="6"
              maxLength="6"
            />
            <p>
              예{")"} 980110{"("}YYMMDD{")"}
            </p>
          </li>
          <li className="customer-formList">
            <label id="num">연락처</label>
            <input
              className="num"
              id="num"
              type="text"
              size="3"
              minLength="3"
              maxLength="3"
              required
            />
            <p className="num">-</p>
            <input
              className="num"
              id="num"
              type="text"
              size="3"
              minLength="3"
              maxLength="3"
              required
            />
            <p className="num">-</p>
            <input
              className="num"
              id="num"
              type="text"
              size="3"
              minLength="3"
              maxLength="3"
              required
            />
          </li>
          <li className="customer-formList">
            <label id="email">이메일</label>
            <input id="email" type="email" required />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default CustomerCheck;
