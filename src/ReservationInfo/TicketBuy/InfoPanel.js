import "./InfoPanel.css";
import { useState } from "react";

//버튼 명시
const Button = ({ name, onClick, className, type, form }) => {
  return (
    <button className={className} onClick={onClick} type={type} form={form}>
      {name}
    </button>
  );
};

const InfoPanel = (props) => {
  //고객 정보 관련 데이터
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

  const [ticketWay, setTicketWay] = useState("");
  const ticketWayChange = (e) => {
    e.preventDefault();
    setTicketWay(e.target.value);
  };

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  //유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  //버튼 관련 함수
  const [infoCheck, setState] = useState(false);

  const handleLoginClick = () => {
    setState(true);
  };

  const handleLogoutClick = () => {
    setState(false);
  };

  let button;
  if (infoCheck) {
    button = (
      <Button
        className="customer-Btn1"
        name="이전"
        onClick={handleLogoutClick}
      />
    );
  } else {
    button = (
      <Button
        className="customer-Btn2"
        name="다음"
        onClick={handleLoginClick}
        type="submit"
        form="ticketForm, customerForm"
      />
    );
  }

  //infoCheck에 따른 페이지 반환
  if (infoCheck) {
    return (
      <div id="checkInfoBox">
        <h1>정보를 확인하세요</h1>
        <ul>
          <li>티켓수령방법: {ticketWay}</li>
          <li>이름: {enteredName}</li>
          <li>생년월일: {enteredBirth}</li>
          <li>연락처: {enteredNum}</li>
          <li>이메일: {enteredEmail}</li>
        </ul>
        {button}
      </div>
    );
  }
  return (
    <div id="panelContent">
      <div id="ticketContent">
        <h2>티켓수령방법</h2>
        <form id="ticketForm">
          <div>
            <input
              type="radio"
              id="opt1"
              name="tickway"
              value="현장수령"
              onChange={ticketWayChange}
            />
            <label for="opt1">현장수령</label>
          </div>
          <div>
            <input
              type="radio"
              id="opt2"
              name="tickway"
              value="배송"
              onChange={ticketWayChange}
            />
            <label for="opt2">배송</label>
          </div>
        </form>
      </div>
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
          {button}
        </form>
      </div>
    </div>
  );
};

export default InfoPanel;
