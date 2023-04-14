import React from "react";
import ChartBar from "./ChartBar";
import PropTypes from "prop-types";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((data) => data.val);
  let totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.val}
          maxValue={totalMax}
          label={dataPoint.label}
          ind={dataPoint.ind}
        />
      ))}
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.array,
  onClick: PropTypes.func,
};

export default Chart;
