import TicketCheck from "./TicketCheck";
import CustomerCheck from "./CustomerCheck";

const MainTicketPage = () => {
  return (
    <div>
      <h1>티켓 예매하기</h1>
      <TicketCheck />
      <CustomerCheck />
    </div>
  );
};

export default MainTicketPage;
