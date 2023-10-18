import "./CustomerCheck.css";
import { useState } from "react";

const CustomerCheck = (props) => {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onBirthHandler = (e) => {
    setBirth(e.currentTarget.value);
  };
  const onNumHandler = (e) => {
    setNum(e.currentTarget.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const customerInfo = {
    name: setName,
    birth: setBirth,
    num: setNum,
    email: setEmail,
  };

  props.saveCustomerData(customerInfo);

  return (
    <div id="customerContent">
      <h2>예매자 확인</h2>
      <form id="customerForm">
        <ul>
          <li className="customer-formList">
            <label id="name">이름</label>
            <input
              id="name"
              type="text"
              maxLength="4"
              required
              value={name}
              onChange={onNameHandler}
            />
          </li>
          <li className="customer-formList">
            <label id="birth">생년월일</label>
            <input
              id="birth"
              type="text"
              required
              minLength="6"
              maxLength="6"
              value={birth}
              onChange={onBirthHandler}
            />
            <p className="birth-ex">
              예{")"} 980110 {"("}YYMMDD{")"}
            </p>
          </li>
          <li className="customer-formList">
            <label id="num">연락처</label>
            <input
              className="num"
              id="num"
              type="text"
              minLength="10"
              maxLength="11"
              required
              value={num}
              onChange={onNumHandler}
            />
            <p className="birth-ex">
              예{")"} 01012345678 {'(" - "'}표시 없이 입력{")"}
            </p>
          </li>
          <li className="customer-formList">
            <label id="email">이메일</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={onEmailHandler}
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default CustomerCheck;
