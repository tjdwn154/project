import { useState } from "react";
import "./DownContent.css";
import PerformInfo from "./content/PerformInfo";
import CastingInfo from "./content/CastingInfo";
import SalesInfo from "./content/SalesInfo";
import ReviewInfo from "./content/ReviewInfo";

const infoArr = ["공연정보", "캐스팅정보", "판매정보", "관람후기"];

const mappingObj = {
  1: <PerformInfo />,
  2: <CastingInfo />,
  3: <SalesInfo />,
  4: <ReviewInfo />,
};

const DownContent = () => {
  const [currentId, setCurrentId] = useState(1);

  const clickHandler = (id) => {
    setCurrentId(id);
  };

  return (
    <div className="wrapper">
      <ul className="tabs">
        {infoArr.map((category, index) => {
          return (
            <li
              key={category + index}
              className={category}
              onClick={() => clickHandler(index + 1)}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <div className="contents">{mappingObj[currentId]}</div>
    </div>
  );
};

export default DownContent;
