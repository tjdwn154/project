const PerformInfo = (props) => {
  const { performanceData } = props;
  return <p>{performanceData?.prfcast}</p>;
};

export default PerformInfo;
