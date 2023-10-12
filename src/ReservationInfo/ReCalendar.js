import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ReCalendar.css";

function ReCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div id="calendarBox">
      <div className="text">관람일</div>
      <Calendar onChange={onChange} value={value} />
      <div className="text">회차</div>
      <button>1회: 19:30</button>
    </div>
  );
}

export default ReCalendar;
