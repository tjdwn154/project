import ReTitle from "./ReTitle";
import ReInfoContent from "./Content/ReInfoContent";
import "./Reservation.css";
import ReCalendar from "./Content/ReCalendar";
import DownContent from "./DownContent/DownContent";

const Reservation = () => {
  return (
    <div id="mainContent">
      <div id="content">
        <ReTitle />
        <div id="innerContent">
          <ReInfoContent />
          <ReCalendar />
        </div>
      </div>
      <div id="downContent">
        <DownContent />
      </div>
    </div>
  );
};

export default Reservation;
