import React, { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import '../assets/css/cs.css';
export default function CS() {
  const [isScrolled, setIsScrolled] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="csWrap">
      {isScrolled && <SubHeader />}
      <nav id="csNav" style={isScrolled === false ? { top: 0 + "px" } : null}>
        <h2>CUSTOMER SERVICE</h2>
        <ul>
          <li>
            <Link to="/cs/notice">공지사항</Link>
          </li>
          <li>
            <Link to="/cs/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/cs/contact">문의하기</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
