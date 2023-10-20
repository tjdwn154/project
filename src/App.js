import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home.js";
import OrderConfirmation from "./pages/OrderConfirmation.js";
import Loading from "./components/Loading";
import SignUp from "./components/member/Signup";
import Login from "./components/member/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reservation from "./ReservationInfo/Reservation.js";
import Mypage from "./components/Mypage/Mypage";
import Check from "./components/Mypage/components/Check";
import Cancel from "./components/Mypage/components/Cancel";
import Epilogue from "./components/Mypage/components/Epilogue";
import Point from "./components/Mypage/components/Point";
import Coupon from "./components/Mypage/components/Coupon";
import Change from "./components/Mypage/components/Change";
import Notice from "./components/Mypage/components/Notice";
import Qs from "./components/Mypage/components/Qs";
import Reference from "./components/Mypage/components/Reference";

import Error404 from "./pages/Error404.js";
import { Routes, Route } from "react-router-dom";
import MainTicketPage from "./ReservationInfo/TicketBuy/MainTicketPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loading />
            ) : (
              <div id="wrap">
                <Header />
                <Home />
                <Footer />
              </div>
            )
          }
        ></Route>
        <Route path="/Reservation/:mt20id" element={<Reservation />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderComplete" element={<OrderConfirmation />} />
        <Route path="*" element={<Error404 />} />

        <Route path="/mypage" element={<Mypage />}>
          <Route path="" element={<Home />} />
          <Route path="check" element={<Check />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path="epilogue" element={<Epilogue />} />
          <Route path="point" element={<Point />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="change" element={<Change />} />
          <Route path="notice" element={<Notice />} />
          <Route path="qs" element={<Qs />} />
          <Route path="reference" element={<Reference />} />
        </Route>
        <Route path="/ticketBuy" element={<MainTicketPage />} />
      </Routes>
    </div>
  );
}
