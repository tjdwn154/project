import TicketCheck from "./TicketCheck";
import CustomerCheck from "./CustomerCheck";
import "./MainTicketPage.css";
import MyticketInfo from "./MyticketInfo";

const MainTicketPage = () => {
  return (
    <div id="mainticket-content">
      <h1>티켓 예매하기</h1>
      <div id="main-innerContent">
        <div id="ticket-innerContent">
          <TicketCheck />
          <CustomerCheck />
        </div>
        <MyticketInfo />
      </div>
    </div>
  );
};

export default MainTicketPage;
