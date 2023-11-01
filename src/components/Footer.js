import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="container flex">
          <div className="footer_logobox">
            <Link to="/"><img src="/white_logo.png" alt="티켓1번가" /></Link>
          </div>
          <div className="container__about">
            <h4>고객센터</h4>
            <p>1111-1111</p>
            <p>
              월-금 10:00-18:00 <br />
              (주말·공휴일 휴무)
            </p>
          </div>
          <div className="container-pages flex">
            <div className="container__recentpages">
              {/* <h2>바로가기</h2> */}
              <ul>
                <li>
                  <Link to="/about">소개</Link>
                </li>
                <li>
                  <Link to="/terms">이용약관</Link>
                </li>
                <li>
                  <Link to="/privacyPolicy">
                    <strong>개인정보처리방침</strong>
                  </Link>
                </li>
                <li>
                  <Link to="/cs">공지사항</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="line__separete"></div>
        <div className="icons">
          <a href="javascript:" className="icon1 icon--instagram">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </a>
          <a href="javascript:" className="icon1 icon--twitter">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
          <a href="javascript:" className="icon1 icon--linkedin">
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </a>
        </div>
        <address>Copyright © 2023 All Rights Reserved by 티켓1번가.</address>{" "}
      </div>
    </footer>
  );
}