import React from "react";
import Check from "./components/Check";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Carousel1 from "./components/Carousel1";
import { Nav } from "react-bootstrap";
import './assets/css/main.css';

export default function App() {
  return (
    <div>
      <SignUp />
      <Login />
      <Check />
      <h1 className="title1">장르별 랭킹</h1>
      <Nav className="sliderTabs" variant="pills" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link href="/home" className="" eventKey="link-0">
            콘서트
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" eventKey="link-1">
            뮤지컬
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" eventKey="link-2">
            스포츠
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" eventKey="link-3">
            전시
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" eventKey="link-4">
            클래식
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div id="carousel">
        <Carousel1 />
      </div>
    </div>
  );
}