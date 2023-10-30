import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header";
import Footer from "../Footer";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const { searchTerm } = useParams();
  const [performanceData, setPerformanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/data/${searchTerm}`)
      .then((response) => {
        setPerformanceData(response.data.dbs.db);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API 요청 중 오류 발생:", error);
        setIsLoading(false);
      });
  }, [searchTerm]);

  return (
    <div>
      <Header />
      <div style={{ marginTop: "10em" }}>
        <h1 className="title1">검색 결과</h1>
      </div>
      <Container>
        <Row>
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : performanceData && performanceData.length > 0 ? (
            performanceData.map((performance) => (
              <Col key={performance.mt20id}>
                <Link to={`/Reservation/${performance.mt20id}`}>
                  <div className="movieBox" key={performance.mt20id}>
                    <div className="posterBox">
                      <img
                        src={performance.poster}
                        alt={performance.prfnm}
                        className="poster-image"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <div className="movieInfoBox">
                      <strong className="movieName">{performance.prfnm}</strong>
                      <p>{performance.genrenm}</p>
                      <span>
                        {performance.prfpdfrom} ~ {performance.prfpdto}
                      </span>
                    </div>
                  </div>
                </Link>
              </Col>
            ))
          ) : (
            <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>검색 결과가 없습니다.</div>
          )}
        </Row>
      </Container>
      <div style={{ marginTop: "10em" }}>
        <Footer />
      </div>
    </div>
  );
}
