import React, { useState } from "react";
import TicketCheck from "./TicketCheck";
import CustomerCheck from "./CustomerCheck";
import "./MainTicketPage.css";
import MyticketInfo from "./MyticketInfo";

const MainTicketPage = (props) => {
  const saveCustomerDataHandler = (enteredInfo) => {
    const customerInfo = {
      ...enteredInfo,
    };
    // console.log(customerInfo);
  };

  return (
    <div id="mainticket-content">
      <h1>티켓 예매하기</h1>
      <div id="main-innerContent">
        <div id="ticket-innerContent">
          <TicketCheck />
          <CustomerCheck saveCustomerData={saveCustomerDataHandler} />
        </div>
        <MyticketInfo />
      </div>
    </div>
  );
};

export default MainTicketPage;
