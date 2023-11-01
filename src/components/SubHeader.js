import { Link, useNavigate } from "react-router-dom";
import { CookieValue } from "../util/cookieutil";
import axios from "axios";

export default function SubHeader() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/logout`)
      .then((response) => {
        if (response.data.message === "로그아웃 성공") {
          // 쿠키를 삭제 로직
          document.cookie = "memberId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("로그아웃 실패", error);
      });
  };
  return (
    <header id="subHeader">
      <div className="inner">
        <nav id="nav">
          <h1>
            <Link title="티켓1번가로" to="/">
            <img src="/white_logo.png" alt="티켓1번가 로고" />
            </Link>
          </h1>
          <ul>
            {CookieValue("memberId") ? (
              <>
                <li>
                  <Link onClick={handleLogout}>로그아웃</Link>
                </li>
                <li>
                  <Link to="/mypage" title="">
                    마이 페이지
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" title="" className="on">
                    로그인
                  </Link>
                </li>

                <li>
                  <Link to="/cs" title="">
                    고객센터
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
