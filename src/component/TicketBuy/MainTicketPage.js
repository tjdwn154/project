import TicketCheck from "./TicketCheck";
import CustomerCheck from "./CustomerCheck";
import "./MainTicketPage.css";

const MainTicketPage = () => {
  return (
    <div id="mainContent">
      <h1>티켓 예매하기</h1>
      <div id="ticket-innerContent">
        <TicketCheck />
        <CustomerCheck />
      </div>
    </div>
  );
};

export default MainTicketPage;
