export default function SubHeader() {
  return (
    <header id="subHeader">
      <div className="inner">
        <nav id="nav">
          <h1>
            <a title="티켓1번가로" href="/">
              <img src="/sub_color_logo.png" alt="티켓1번가 로고" />
            </a>
          </h1>
          <ul>
            <li>
              <a href="/login" title="" className="on">
                로그인
              </a>
            </li>
            <li>
              <a href="/mypage" title="">
                마이 페이지
              </a>
            </li>
            <li>
              <a href="/cs" title="">
                고객센터
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
