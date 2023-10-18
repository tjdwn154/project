import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function LandingCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div id="ladingCarouselBox">
      <Swiper
        style={{}}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,

        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Thumbs ]}
        className="mySwiper2"
      >
        <SwiperSlide>
          {/* <div className="titleBox">
            <h1 className="title1">공연 제목</h1>
            <p className="title2">공연 소제목</p>
            <p className="sub1">공연 장소</p>
            <p className="sub2">공연 일자</p>
          </div> */}
          <img src="https://picsum.photos/1600/800?random=1" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=2" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=3" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=4" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=5" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=6" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=7" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=8" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=9" alt="공연제목 바인딩" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=1" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=2" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=3" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=4" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=5" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=6" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=7" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=8" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=9" alt="공연제목 바인딩" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}