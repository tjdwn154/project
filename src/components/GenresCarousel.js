import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button,Nav } from "react-bootstrap";

export default function GenresCarousel() {
  const [increNum, setIncreNum] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ]);
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: "Tab1", content: "왜안되니" },
    { name: "Tab2", content: "제발좀되렴" },
    { name: "Tab3", content: "Tab menu THREE" }
  ];
  return (
    <div id="genresCarouselBox" >
      <div className="mainInner">
        <h1 className="title1">장르별 공연</h1>
        <Nav className="sliderTabs" variant="pills" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link href="/" className="" eventKey="link-0">
              콘서트
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" eventKey="link-1">
              뮤지컬
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" eventKey="link-2">
              스포츠
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" eventKey="link-3">
              전시
            </Nav.Link>                    
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" eventKey="link-4">
              클래식
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop={true}
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            dynamicBullets: true
          }}
          navigation={true}
          modules={[Navigation,Pagination,]}
          className="mySwiper"
        >
          {increNum.map(function (a, i) {
            return (
              <SwiperSlide>
                <div className="movieBox">
                  <div className="posterBox">
                    <img
                      src="https://picsum.photos/400/500?random=1"
                      alt="공연제목 바인딩"
                      onError
                    />
                    <div className="hoverBox">
                      <Button variant="light">상세보기</Button>
                      <Button variant="danger">예매하기</Button>
                    </div>
                  </div>
                  <div className="movieInfoBox">
                    <strong className="movieName">공연제목 바인딩</strong>
                    <span>공연 장소 바인딩</span>
                    <span className="movieDate">
                          공연일자 바인딩 0000.0.0~00.00
                        </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
         
        </Swiper>
      </div>
    </div>
  );
}