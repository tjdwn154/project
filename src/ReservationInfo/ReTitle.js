import "./ReTitle.css";

const ReTitle = (props) => {
  const { performanceData } = props;
  return (
    <div className="reserve-title">
      <h1>{performanceData?.prfnm}</h1>
      <div id="reserve-text">
        <p className="content">
          {performanceData?.prfpdfrom} ~ {performanceData?.prfpdto}
        </p>
        <p className="content">l</p>
        <p className="content">{performanceData?.fcltynm}</p>
      </div>
    </div>
  );
};

export default ReTitle;
