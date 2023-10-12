import ReTitle from "./ReTitle";
import ReInfoContent from "./ReInfoContent";
import "./Reservation.css";
import Recalendar from "./ReCalendar";
import ReCalendar from "./ReCalendar";

const Reservation = () => {
  return (
    <div id="content">
      <ReTitle />
      <div id="innerContent">
        <ReInfoContent />
        <ReCalendar />
      </div>
    </div>
  );
};

export default Reservation;
