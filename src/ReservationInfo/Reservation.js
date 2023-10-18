import ReTitle from "./ReTitle";
import ReInfoContent from "./Content/ReInfoContent";
import "./Reservation.css";
import ReCalendar from "./Content/ReCalendar";
import DownContent from "./DownContent/DownContent";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Reservation = () => {
  const { mt20id } = useParams();
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/boxoffice/${mt20id}`)
      .then((response) => {
        const data = response.data.dbs.db[0]; // 데이터 추출
        setPerformanceData(data);
        console.log("API Data:", data);
      })
      .catch((error) => {
        console.error("API 에러:", error);
      });
  }, [mt20id]);

  return (
    <div id="mainContent">
      <div id="content">
        <ReTitle performanceData={performanceData} />
        <div id="innerContent">
          <ReInfoContent performanceData={performanceData} />
          <ReCalendar />
        </div>
      </div>
      <div id="downContent">
        <DownContent performanceData={performanceData} />
      </div>
    </div>
  );
};

export default Reservation;
