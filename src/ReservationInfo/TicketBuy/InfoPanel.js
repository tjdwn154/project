import "./CustomerCheck.css";
import { useState } from "react";

const CustomerInfoCheck = (props) => {
  const [enteredName, setName] = useState("");
  const [enteredBirth, setBirth] = useState("");
  const [enteredNum, setNum] = useState("");
  const [enteredEmail, setEmail] = useState("");

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

  if (props.infoCheck) {
    return (
      <div>
        <h1>정보를 확인하세요</h1>
        <ul>
          <li>티켓수령방법: 현장수령</li>
          <li>이름: {enteredName}</li>
          <li>생년월일: {enteredBirth}</li>
          <li>연락처: {enteredNum}</li>
          <li>이메일: {enteredEmail}</li>
        </ul>
        <button>확인</button>
      </div>
    );
  }
  return (
    <div>
      <div id="ticketContent">
        <h2>티켓수령방법</h2>
        <form id="ticketForm">
          <div>
            <input
              type="radio"
              id="opt1"
              name="tickway"
              value="현장수령"
              checked
            />
            <label for="opt1">현장수령</label>
          </div>
          <div>
            <input type="radio" id="opt2" name="tickway" value="배송" />
            <label for="opt2">배송</label>
          </div>
        </form>
      </div>
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
              value={enteredName}
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
              value={enteredBirth}
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
              value={enteredNum}
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
              value={enteredEmail}
              onChange={onEmailHandler}
            />
          </li>
        </ul>
      </form>
    </div>
  );
};

const Button = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

const InfoPanel = () => {
  const [infoCheck, setState] = useState(false);

  const handleLoginClick = () => {
    setState(true);
  };

  const handleLogoutClick = () => {
    setState(false);
  };

  let button;
  if (infoCheck) {
    button = <Button name="이전" onClick={handleLogoutClick} />;
  } else {
    button = <Button name="다음" onClick={handleLoginClick} />;
  }
  return (
    <>
      {button}
      <CustomerInfoCheck infoCheck={infoCheck} />
    </>
  );
};

export default InfoPanel;
