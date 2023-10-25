import React from "react";
import "../assets/css/main.css";
import LandingCarousel from "../components/Carousel/LandingCarousel";
import RanksCarousel from "../components/Carousel/RanksCarousel.js";
import NewCarousel from "../components/Carousel/NewCarousel";
import GenresCarousel from "../components/Carousel/GenresCarousel.js";
import ToTopBtn from '../components/ToTopBtn';
export default function Home() {
  return (
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
    </div>
  );
}
