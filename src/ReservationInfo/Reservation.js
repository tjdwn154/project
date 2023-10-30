import ReTitle from "./ReTitle";
import ReInfoContent from "./Content/ReInfoContent";
import "./Reservation.css";
import ReCalendar from "./Content/ReCalendar";
import DownContent from "./DownContent/DownContent";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SubHeader from "../components/SubHeader";

const Reservation = () => {
  const { mt20id } = useParams();
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/pblprfr/${mt20id}`)
      .then((response) => {
        const data = response.data.dbs.db[0]; // 데이터 추출
        setPerformanceData(data);
        console.log("선택한 API Data:", data);
      })
      .catch((error) => {
        console.error("API 에러:", error);
      });
  }, [mt20id]);

  return (
    <div>
      <SubHeader />
      <div id="reserve-mainContent">
        <div id="reserve-content">
          <ReTitle performanceData={performanceData} />
          <div id="reserve-innerContent">
            <ReInfoContent performanceData={performanceData} />
            <ReCalendar performanceData={performanceData} />
          </div>
        </div>
        <div id="reserve-downContent">
          <DownContent performanceData={performanceData} />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
