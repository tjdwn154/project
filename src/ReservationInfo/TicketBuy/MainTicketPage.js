import React, { useState } from "react";
import "./MainTicketPage.css";
import InfoPanel from "./InfoPanel";

const MainTicketPage = (props) => {
  const saveCustomerDataHandler = (enteredInfo) => {
    const customerInfo = {
      ...enteredInfo,
    };

    console.log("MainTicketPage내부정보", customerInfo);
  };

  return (
    <div id="mainticket-content">
      <h1>티켓 예매하기</h1>
      <div id="main-innerContent">
        <div id="ticket-innerContent">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};

export default MainTicketPage;
