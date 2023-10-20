import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ReCalendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ReCalendar(props) {
  const [value, onChange] = useState(new Date());
  const { performanceData } = props;

  return (
    <div id="re-calendarBox">
      <div className="calendar-text1">관람일</div>
      <Calendar onChange={onChange} value={value} locale="en-EN" />
      <div className="calendar-line"></div>
      <div className="calendar-text2">회차</div>
      <button class="btn btn-outline-primary">1회: 19:30</button>
    </div>
  );
}

export default ReCalendar;
