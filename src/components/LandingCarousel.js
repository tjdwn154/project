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
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={false}
        navigation={true}
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
          <img src="https://picsum.photos/1600/800?random=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=9" />
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
          <img src="https://picsum.photos/1600/800?random=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1600/800?random=9" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}