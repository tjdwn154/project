import "./TicketCheck.css";

const TicketCheck = () => {
  return (
    <div id="ticketContent">
      <h2>티켓수령방법</h2>
      <form id="ticketForm">
        <div>
          <input
            type="radio"
            id="opt1"
            name="tickway"
            value="현장수령"
            checked
          />
          <label for="opt1">현장수령</label>
        </div>
        <div>
          <input type="radio" id="opt2" name="tickway" value="배송" />
          <label for="opt2">배송</label>
        </div>
      </form>
    </div>
  );
};

export default TicketCheck;
