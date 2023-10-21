import CustomerCheck from "./CustomerCheck";

const CustomerInfoCheck = (props) => {
  return (
    <div>
      <h1>정보를 확인하세요</h1>
      <ul>
        <li>이름: {props.name}</li>
        <li>생년월일: {props.birth}</li>
        <li>연락처: {props.num}</li>
        <li>이메일: {props.email}</li>
      </ul>
    </div>
  );
};

export default CustomerInfoCheck;
