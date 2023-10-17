import React from "react";
import './App.css';
import Home from './pages/Home.js'
import Check from "./components/Check";
import SignUp from "./components/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

import Error404 from './pages/Error404.js'
import {Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div id="wrap"><Header /><Home /><Footer /></div>}>
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