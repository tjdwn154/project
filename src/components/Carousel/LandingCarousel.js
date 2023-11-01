import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function LandingCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imageSrcList] = useState([
    'https://cdn.pixabay.com/photo/2016/11/23/00/43/audio-1851517_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/19/09/57/violins-1838390_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/09/16/10/17/dancer-5576002_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/01/09/17/34/opera-594592_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/15/44/audience-1835431_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/04/13/08/06/father-and-son-3315817_1280.jpg',
  ]);
  const scrollTo = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth"
    });
  };
  return (
    <div id="landingCarouselBox">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {imageSrcList.map((src, i) => (
          <SwiperSlide key={i}>
            <div class="txtBox">
              <strong><span>티켓1번가</span></strong>
              <p><span>음악과 쇼의 황홀한 조화에 빠져보세요</span></p>
              <button onClick={()=>{
                scrollTo()
              }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                둘러보기
              </button>
            </div>
            <img src={src} alt={`티켓1번가 랜딩${i}`} />
          </SwiperSlide>
        ))}
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
        {imageSrcList.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`썸네일 ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}