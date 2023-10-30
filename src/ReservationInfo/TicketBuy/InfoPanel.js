import "./InfoPanel.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MyticketInfo from "./MyticketInfo";

//버튼 명시
const Button = ({ name, onClick, className, type, form, disabled, style }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      form={form}
      disabled={disabled}
      style={style}
    >
      {name}
    </button>
  );
};

const InfoPanel = (props) => {
  const location = useLocation();
  const performanceData = location.state.performanceData;
  //고객 정보 관련 데이터
  const [enteredName, setName] = useState("");
  const [enteredBirth, setBirth] = useState("");
  const [enteredNum, setNum] = useState("");
  const [enteredEmail, setEmail] = useState("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [birthMessage, setBirthMessage] = useState("");
  const [numMessage, setNumMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  //유효성 검사
  const [isName, setIsName] = useState(false);
  const [isBirth, setIsBirth] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  //이름
  const onNameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameMessage("2글자 이상 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("");
      setIsName(true);
    }
  };

  //생년월일
  const onBirthHandler = (e) => {
    setBirth(e.target.value);
    if (e.target.value.length < 6) {
      setBirthMessage("6자리로 입력해주세요.");
      setIsBirth(false);
    } else {
      setBirthMessage("");
      setIsBirth(true);
    }
  };

  //전화번호: 010으로 시작
  const onNumHandler = (e) => {
    const numCheck = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const numCurrent = e.target.value;
    setNum(numCurrent);
    if (numCurrent.length < 11 || !numCheck.test(numCurrent)) {
      setNumMessage("전화번호를 입력해주세요.");
      setIsNum(false);
    } else {
      setNumMessage("");
      setIsNum(true);
    }
  };

  //이메일
  const onEmailHandler = (e) => {
    //영문 대소문자, 숫자로 시작+2번째 글짜부터는 영대소문자, 숫자(-_. 포함)
    //@ 중간에 들어감, 도메인 부분 영문 대소문자, 숫자시작 이후 -_. 가능(.하나 최소 포함)
    //.뒤에 도메인 들어갈 자리(2-3)
    const emailCheck =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailCheck.test(emailCurrent)) {
      setEmailMessage("이메일을 제대로 입력해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  //티켓수령방법
  const [ticketWay, setTicketWay] = useState("");
  const ticketWayChange = (e) => {
    e.preventDefault();
    setTicketWay(e.target.value);
  };

  //버튼 관련 함수
  const [infoCheck, setState] = useState(false);
  const [finInfoCheck, setFinInfoCheck] = useState(false);

  const handleLoginClick = () => {
    if (ticketWay == false) {
      alert("티켓수령방법을 선택해주세요.");
    } else {
      setState(true);
    }
  };
  const handleLogoutClick = () => {
    setState(false);
  };
  const CheckBtnClick = () => {
    alert("정보가 확인되었습니다.");
    setFinInfoCheck(true);
  };
  const infoFinCheck = !finInfoCheck;
  const infoTFCheck = !(isName && isEmail && isBirth && isNum);
  let button;
  let checkBtn;
  if (infoCheck) {
    button = (
      <Button
        className="customer-btnPrev"
        name="이전"
        onClick={handleLogoutClick}
      />
    );
    checkBtn = (
      <Button className="customer-btnOk" name="확인" onClick={CheckBtnClick} />
    );
  } else {
    button = (
      <Button
        className="customer-btnNext"
        name="다음"
        onClick={handleLoginClick}
        type="submit"
        form="ticketForm, customerForm"
        disabled={infoTFCheck}
        style={{ backgroundColor: infoTFCheck ? "gray" : "#1a7dbe" }}
      />
    );
  }

  //infoCheck에 따른 페이지 반환
  if (infoCheck) {
    return (
      <div id="checkInfoBox-content">
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
          {checkBtn}
        </div>
        <div className="mytickInfo-content">
          <MyticketInfo
            performanceData={performanceData}
            infoFinCheck={infoFinCheck}
          />
        </div>
      </div>
    );
  }
  return (
    <div id="main-panelContent">
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
                <div className="customer-form-boxlist">
                  <label id="name">이름</label>
                  <input
                    id="name"
                    type="text"
                    maxLength="4"
                    required
                    value={enteredName}
                    onChange={onNameHandler}
                  />
                </div>
                {enteredName.length > 0 && <span>{nameMessage}</span>}
              </li>
              <li className="customer-formList">
                <div className="customer-form-boxlist">
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
                </div>
                {enteredBirth.length > 0 && <span>{birthMessage}</span>}
                <p className="birth-ex">
                  예{")"} 980110 {"("}YYMMDD{")"}
                </p>
              </li>
              <li className="customer-formList">
                <div className="customer-form-boxlist">
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
                </div>
                {enteredNum.length > 0 && <span>{numMessage}</span>}
                <p className="birth-ex">
                  예{")"} 01012345678 {'(" - "'}표시 없이 입력{")"}
                </p>
              </li>
              <li className="customer-formList">
                <div className="customer-form-boxlist">
                  <label id="email">이메일</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={enteredEmail}
                    onChange={onEmailHandler}
                  />
                </div>
                {enteredEmail.length > 0 && <span>{emailMessage}</span>}
              </li>
            </ul>
            {button}
          </form>
        </div>
      </div>
      <div className="mytickInfo-content">
        <MyticketInfo
          performanceData={performanceData}
          infoFinCheck={infoFinCheck}
        />
      </div>
    </div>
  );
};

export default InfoPanel;
