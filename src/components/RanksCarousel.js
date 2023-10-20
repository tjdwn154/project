import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "react-bootstrap";
export default function RanksCarousel() {
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
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ]);
  return (
    <div id="ranksCarouselBox">
      <div className="inner1">
        <h1 className="title1">공연차트</h1>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={30}
          centeredSlides={false}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {increNum.map(function (a, i) {
            return (
              <SwiperSlide>
                <div className="movieBox">
                  <div className="posterBox">
                    <div className="ranknum">{increNum[i]}</div>
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
