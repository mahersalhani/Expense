import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointValues);
  console.log(totalMaximum);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            //
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
