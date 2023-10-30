import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Badge } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NewCarousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/data`)
      .then((response) => {
        const newData = response.data.dbs.db;
        setPerformances(newData);
        console.log("새로 오픈한 공연: ", newData);
      })
      .catch((error) => {
        console.log("api error: " + error);
      });
  }, []);

  return (
    <div id="newCarouselBox">
      <div className="mainInner2">
        <h1 className="title1">새로 오픈한 공연</h1>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={20}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
            dynamicBullets: true,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {performances.map((performance) => {
            return (
              <SwiperSlide key={performance.mt20id}>
                <Link to={`/Reservation/${performance.mt20id}`}>
                  <div className="movieBox">
                    <div className="posterBox">
                      <div className="ranknum">{performance.rnum}</div>
                      <Badge bg="warning">NEW</Badge>
                      <img
                        src={performance.poster}
                        // src="https://picsum.photos/400/500?random=1"
                        alt="공연 포스터"
                      />
                      <div className="hoverBox">
                        <Button variant="light">상세보기</Button>
                        <Button variant="danger">예매하기</Button>
                      </div>
                    </div>
                    <div className="movieInfoBox">
                      <strong className="movieName">{performance.prfnm}</strong>
                      <span>{performance.fcltynm}</span>
                      <span className="movieDate">{performance.prfpd}</span>
                    </div>
                  </div>
                </Link>
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
