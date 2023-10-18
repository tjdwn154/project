const PerformInfo = (props) => {
  const { performanceData } = props;

  return (
    <div>
      <ul>
        {performanceData?.styurls[0].styurl.map((url, index) => (
          <li key={index}>
            <img src={url} alt={`${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformInfo;
