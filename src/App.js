import React from "react";
import Home from './pages/Home.js'
import Check from "./components/Check";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Error404 from './pages/Error404.js'
import {Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div id="wrap">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="" element={<></>}></Route>
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Check />
    </div>
  );
}