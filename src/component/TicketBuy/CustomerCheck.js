const CustomerCheck = () => {
  return (
    <div>
      <h2>예매자 확인</h2>
      <form>
        <p>이름</p>
        <input type="text" maxLength="4" required />
        <p>생년월일</p>
        <input type="text" required minLength="6" maxLength="6" />
        <p>
          예{")"} 980110{"("}YYMMDD{")"}
        </p>
        <p>연락처</p>
        <input type="text" minLength="3" maxLength="3" required />
        <p>-</p>
        <input type="text" minLength="3" maxLength="3" required />
        <p>-</p>
        <input type="text" minLength="3" maxLength="3" required />
        <p>이메일</p>
        <input type="email" required />
      </form>
    </div>
  );
};

export default CustomerCheck;
