import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button,Nav } from "react-bootstrap";

export default function GenresCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div id="genresCarouselBox" >
      <div className="inner">
        <h1 className="title1">장르별 공연</h1>
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
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {[0, 1, 2, 3].map(function (a, i) {
            return (
              <SwiperSlide>
                <ul className="slideWrap">
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>
                        <span>여기에 공연 장소 바인딩</span>
                        <span className="movieDate">
                          공연일자 바인딩 0000.0.0~00.00
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>
                        <span>여기에 공연 장소 바인딩</span>
                        <span className="movieDate">
                          공연일자 바인딩 0000.0.0~00.00
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>
                        <span>여기에 공연 장소 바인딩</span>
                        <span className="movieDate">
                          공연일자 바인딩 0000.0.0~00.00
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>
                        <span>여기에 공연 장소 바인딩</span>
                        <span className="movieDate">
                          공연일자 바인딩 0000.0.0~00.00
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <img
                          src="https://picsum.photos/400/500?random=1"
                          alt="공연제목 바인딩"
                          onError
                        />
                        <div className=""></div>
                        <div className="hoverBox">
                          <Button variant="light">상세보기</Button>
                          <Button variant="danger">예매하기</Button>
                        </div>
                      </div>
                      <div className="movieInfoBox">
                        <strong className="movieName">공연제목 바인딩</strong>
                        <span>여기에 공연 장소 바인딩</span>
                        <span className="movieDate">
                          공연일자 바인딩 0000.0.0~00.00
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </SwiperSlide>
            );
          })}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}