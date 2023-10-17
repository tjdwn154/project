import React from 'react';
import '../assets/css/main.css';
import LandingCarousel from "../components/LandingCarousel";
import NewCarousel from "../components/NewCarousel";
import RanksCarousel from "../components/RanksCarousel.js";

export default function Home() {
  return (
    <div id="container">
        <LandingCarousel />

        <RanksCarousel />
        <NewCarousel />
    </div>
  )
}
