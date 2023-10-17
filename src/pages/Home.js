import React from 'react';
import '../assets/css/main.css';
import LandingCarousel from "../components/LandingCarousel";
import NewCarousel from "../components/NewCarousel";
import GenresCarousel from "../components/GenresCarousel.js";

export default function Home() {
  return (
    <div id="container">
        <LandingCarousel />

        <GenresCarousel />
        <NewCarousel />
    </div>
  )
}
