import React, { useState, useEffect } from "react";
import { Nav, Container, Navbar, Form, Button, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CookieValue } from "../util/cookieutil";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [logoSrc, setLogoSrc] = useState("/white_logo.png");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
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

  const handleSeacrh = () => {
    navigate(`/search/${searchTerm}`);
  };

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
            {CookieValue("memberId") ? (
              <Nav.Item>
                <Nav.Link onClick={handleLogout}>로그아웃</Nav.Link>
              </Nav.Item>
            ) : (
              <>
                <Nav.Item>
                  <Nav.Link href="/login">로그인</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/signup" eventKey="link-1">
                    회원가입
                  </Nav.Link>
                </Nav.Item>
              </>
            )}
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
              <img src={logoSrc} alt="티켓1번가 로고" style={{ transition: "none" }} />
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
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    />
                    <Button variant="outline-success" onClick={handleSeacrh}>
                      <FontAwesomeIcon icon="fa-solid fa-hat-wizard" />
                    </Button>
                  </Form>
                  <Nav className="justify-content-end flex-grow-1">
                    {CookieValue("memberId") ? (
                      <>
                        <Nav.Link href="/mypage/check">예매확인</Nav.Link>
                        <Nav.Link href="/mypage">마이페이지</Nav.Link>
                      </>
                    ) : (
                      <>
                        <Nav.Link
                          href="/mypage"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("로그인이 필요합니다. 로그인 후 다시 시도해주세요.");
                          }}
                        >
                          마이페이지
                        </Nav.Link>
                      </>
                    )}
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
