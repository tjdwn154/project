import ReTitle from "./ReTitle";
import ReInfoContent from "./content/ReInfoContent";
import "./Reservation.css";
import ReCalendar from "./content/ReCalendar";
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
