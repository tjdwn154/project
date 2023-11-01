import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchId from "./SearchId";
import SearchPw from "./SearchPw";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";

export default function SearchPage() {
  const [currentId, setCurrentId] = useState(1);
  const search = ["아이디찾기", "비밀번호찾기"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "10px",
      }}
    >
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow px-4" style={{ width: "100%", height: "45em" }}>
              <Card.Body>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                  <Link to="/">
                    <img src="/logo.png" alt="로고" />
                  </Link>
                </div>
                <ul style={{ display: "flex", justifyContent: "center", listStyle: "none" }}>
                  {search.map((select, index) => {
                    return (
                      <li
                        key={select + index}
                        className={select}
                        onClick={() => setCurrentId(index + 1)}
                        style={{ marginRight: "20px", cursor: "pointer" }}
                      >
                        {select}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  {currentId === 1 && <SearchId />}
                  {currentId === 2 && <SearchPw />}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
