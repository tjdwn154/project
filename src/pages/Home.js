import React from "react";
import "../assets/css/main.css";
import LandingCarousel from "../components/Carousel/LandingCarousel";
import RanksCarousel from "../components/Carousel/RanksCarousel.js";
import NewCarousel from "../components/Carousel/NewCarousel";
import GenresCarousel from "../components/Carousel/GenresCarousel.js";
import ToTopBtn from '../components/ToTopBtn';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
export default function Home() {
  return (
    <div id="wrap">
      <Header />
      <div id="container">
        <LandingCarousel />
        <div className="scrollDownBox">
          <p>SCROLL DOWN</p>
          <a className="mouseDown" href="/" title="Scroll Down">
            <span></span>
          </a>
        </div>
        <ToTopBtn />
        <RanksCarousel />
        <GenresCarousel />
        <NewCarousel />
        {/* <div className="landingBox2">
          <div className="landingInner">
            <div className="right">
              <p className="titleThin1"><strong>시간</strong>과 <strong>예술</strong>의 조화로운 여행</p>
              <h2 className="titleBold1">티켓1번가</h2>
            </div>
          </div>
        </div> */}
        {/* <div className="landingBox1">
          <div className="landingInner">
            <div className="content">
              <div className="left" ref={Left1}>
              <img src="https://cdn.pixabay.com/photo/2017/08/10/01/44/concert-2616946_1280.jpg" alt="" />
              </div>
              <div className="right" ref={Right1}>
                <p>asdasdasdasdasdasd</p>
                <h2 className="">후기를 남겨주세요!</h2>
                <p>
                  공연이 즐거우셨다면 간단한 후기를 남겨주시면 감사하겠습니다. 티켓1번가에 큰 힘이 됩니다.
                </p>
                <button onClick={()=>{
                  scrollTo()
                }}>바로가기</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="banners">
          <div className="banner">
            <div className="txtBox">
              <h2>오늘은 어떤 공연 볼까</h2> 
              <p>다양한 공연을 한 눈에!</p>
              <p>티켓1번가와 함께 하세요!</p>
            </div>
            <div className="imgBox">
              <img src="/ticketIcon.png" alt="티켓 아이콘" />
            </div>
          </div>
          <div className="banner">
            <div className="txtBox">
              <h2>공유하면 1000P</h2> 
              <p>친구에게 공유하면</p>
              <p>무려 1000P를 드려요~!</p>
            </div>
            <div className="imgBox">
              <img src="/coinIcon.png" alt="티켓 아이콘" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}
