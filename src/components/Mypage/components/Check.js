import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import TodoBoard from "./List/TodoBoard";

function Check() {
  const [todoList, setTodoList] = useState([]);
  // const [inputValue, setInputValue] = useState('')
  // const addItem = () => {
  //   setTodoList([...todoList,inputValue])
  // }
  return (
    <>
      <p className="name2">예매내역</p>
      <div>
        <p>
          총 <>nn개</>의 티켓이 있습니다.
        </p>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <p className="NavList">제목</p>
          </Nav.Item>
          <Nav.Item>
            <p className="NavList">위치</p>
          </Nav.Item>
          <Nav.Item>
            <p className="NavList">매수</p>
          </Nav.Item>
          <Nav.Item>
            <p className="NavList">일자</p>
          </Nav.Item>
          <Nav.Item>
            <p className="NavList">시간</p>
          </Nav.Item>
          <Nav.Item>
            <p className="NavList">예매상태</p>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link eventKey="disabled" disabled></Nav.Link>
          </Nav.Item> */}
        </Nav>
        <main>
          {/* <input value={inputValue} type="text" onChange=
            {(event)=>setInputValue(event.target.value)}/> */}
          {/* <button onClick={addItem}>추가</button> */}
          <TodoBoard todoList={todoList} />
        </main>
      </div>
    </>
  );
}

export default Check;
