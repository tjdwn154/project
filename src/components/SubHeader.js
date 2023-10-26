import { Link } from "react-router-dom";

export default function SubHeader() {
  return (
    <header id="subHeader">
      <div className="inner">
        <nav id="nav">
          <h1>
            <Link title="티켓1번가로" to="/">
              <img src="/color_logo.png" alt="티켓1번가 로고" />
            </Link>
          </h1>
          <ul>
            <li>
              <Link to="/login" title="" className="on">
                로그인
              </Link>
            </li>
            <li>
              <Link to="/mypage" title="">
                마이 페이지
              </Link>
            </li>
            <li>
              <Link to="/cs" title="">
                고객센터
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
