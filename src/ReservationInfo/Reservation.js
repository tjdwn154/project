import ReTitle from "./ReTitle";
import ReInfoContent from "./Content/ReInfoContent";
import "./Reservation.css";
import ReCalendar from "./Content/ReCalendar";

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
