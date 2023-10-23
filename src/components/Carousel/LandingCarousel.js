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
          <img src="https://picsum.photos/1600/400?random=1" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=2" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=3" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=4" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=5" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=6" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=7" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=8" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=9" alt="공연제목 바인딩" />
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
          <img src="https://picsum.photos/1600/400?random=1" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=2" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=3" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=4" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=5" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=6" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=7" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=8" alt="공연제목 바인딩" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/400?random=9" alt="공연제목 바인딩" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}