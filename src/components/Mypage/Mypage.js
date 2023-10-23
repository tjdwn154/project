import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mypage1.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Check from "./components/Check";
import Cancel from "./components/Cancel";
import Epilogue from "./components/Epilogue";
import Point from "./components/Point";
import Coupon from "./components/Coupon";
import Change from "./components/Change";
import Reference from "./components/Reference";
import Footer from "../Footer";

function Mypage() {
  return (
    <>
    <div className="box">
      <div className="box1">
        <Menu />
      </div>
      <div className="box2">
        <Routes>
          <Route path="/check" element={<Check />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/epilogue" element={<Epilogue />} />
          <Route path="/point" element={<Point />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/change" element={<Change />} />          
          <Route path="/reference" element={<Reference />} />
        </Routes>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Mypage;
