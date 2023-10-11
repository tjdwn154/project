import React from "react";
import Check from "./components/Check";
import SignUp from "./components/Signup";
import Login from "./components/Login";

export default function App() {
  return (
    <div>
      <SignUp />
      <Login />
      <Check />
    </div>
  );
}