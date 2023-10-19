import React, { useState, useEffect } from "react";
import {
  Nav,
  Container,
  Navbar,
  Form,
  Button,
  Offcanvas
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [logoSrc, setLogoSrc] = useState("/white_logo.png");
  const handleImageHover = () => {
    setLogoSrc("/color_logo.png");
  };
  const handleImageLeave = () => {
    setLogoSrc("/white_logo.png");
  };
  const headerBackgroundColor = isScrolled ? "transparent" : "#3a5e60";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="header"
      style={{ backgroundColor: headerBackgroundColor }}
      onMouseEnter={handleImageHover}
      onMouseLeave={handleImageLeave}
    >
      <div className="inner">
        {isScrolled && (
          <Nav className="nav0 justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/login">로그인</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/signup" eventKey="link-1">
                회원가입
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/cs" eventKey="link-2">
                고객센터
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )}

        <div id="nav2">
          <h1 className="logo">
            <a href="/home" title="홈으로">
              <img
                src={logoSrc}
                alt="티켓1번가 로고"
                style={{ transition: "none" }}
              />
            </a>
          </h1>
          <Navbar expand={"xl"} className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"xl"}`}>
                <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
              </Navbar.Toggle>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${"xl"}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"xl"}`}>
                    <Link to="/">
                      <img src="/color_logo.png" alt="티켓1번가 로고" />
                    </Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder=""
                      aria-label="Search"
                    />
                    <Button variant="outline-success">
                      <FontAwesomeIcon icon="fa-solid fa-hat-wizard" />
                    </Button>
                  </Form>
                  <Nav className="justify-content-end flex-grow-1">
                    <Nav.Link href="/">예매확인</Nav.Link>
                    <Nav.Link href="/">마이페이지</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      </div>
    </header>
  );
}
