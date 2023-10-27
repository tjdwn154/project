import '../assets/css/cs.css';
import React, { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import '../assets/css/cs.css';
export default function CS() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="csWrap">
      <SubHeader />
      <nav
        id="csNav"
        style={{
          top: isScrolled ? 0 : "60px"
        }}
      >
        <h2>CUSTOMER SERVICE</h2>
        <ul>
          <li>
            <Link to="/cs">공지사항</Link>
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
