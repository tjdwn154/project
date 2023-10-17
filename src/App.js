import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import Home from './pages/Home.js'
import Check from "./components/Check";
import Loading from "./components/Loading";
import SignUp from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

import Error404 from './pages/Error404.js'
import {Routes,Route} from 'react-router-dom'

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
        <Route path="/" element={loading ? (
        <Loading />
      ) :(<div id="wrap"><Header /><Home /><Footer /></div>)}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="" element={<></>}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* <Check /> */}
      
    </div>
  );
}