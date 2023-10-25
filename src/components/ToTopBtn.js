import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ToTopBtn(){
  const [isShow, setIsShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`toTopBtn ${isShow ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon="fa-solid fa-arrow-up-long" />
    </button>
  );
};