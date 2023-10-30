import { Link,useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
export default function CSBoard(props) {
  const location = useLocation();
  const { state } = location;
  const boardInfo = state.boardInfo;
  console.log(state);
  return (
    <div id="noticeBoardWrap">
      <Breadcrumb>
        <Breadcrumb.Item active>고객센터</Breadcrumb.Item>
        <Breadcrumb.Item href="/cs">공지사항</Breadcrumb.Item>
      </Breadcrumb>
      <h2>{boardInfo.title}</h2>
      <div className="contents">{boardInfo.content}</div>
      <Link to="/cs" className="toBackBtn">
        목록으로
      </Link>
    </div>
  );
}
