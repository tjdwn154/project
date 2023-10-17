import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Badge } from "react-bootstrap";

export default function NewCarousel() {
  return (
    <div id="newCarouselBox">
      <div className="inner">
        <h1 className="title1">새로 오픈한 공연</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            dynamicBullets: true
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {[0, 1, 2, 3].map(function (a, i) {
            return (
              <SwiperSlide>
                <ul className="slideWrap">
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
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

                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
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
                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
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

                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
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

                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="movieBox">
                      <div className="posterBox">
                        <Badge bg="warning">NEW</Badge>
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

                        <span>공연 장소 바인딩</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
