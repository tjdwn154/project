import React from "react";
import "../assets/css/main.css";
import Button from 'react-bootstrap/Button';
import LandingCarousel from "../components/Carousel/LandingCarousel";
import RanksCarousel from "../components/Carousel/RanksCarousel.js";
import NewCarousel from "../components/Carousel/NewCarousel";
import GenresCarousel from "../components/Carousel/GenresCarousel.js";
import ToTopBtn from '../components/ToTopBtn';
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <div className="landingBox1">
        <div className="landingInner">
          <div className="content">
            {/* <p>asdasdasdasdasdasd</p>
            <h2 className="">티켓1번가</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              ratione, eum voluptas quidem magni quam repudiandae explicabo
              vero. Architecto, tenetur temporibus placeat reiciendis magni ut
              tempore voluptates eveniet facere dicta!
            </p> */}
          </div>
        </div>
      </div>
        <GenresCarousel />
        <NewCarousel />
        <div className="landingBox2">
        <div className="landingInner">
          <div className="right">
            <p className="titleThin1"><strong>시간</strong>과 <strong>예술</strong>의 조화로운 여행</p>
            <h2 className="titleBold1">티켓1번가</h2>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>

  );
}
