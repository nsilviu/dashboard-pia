import React from "react";

const data = [18, 39, 49, 29, 21, 12, 9];
const dataPercentage = [];
var maxValue = 0;
const x = [0, 25, 50, 75, 100, 125, 150];
const days = ["L", "M", "Mi", "J", "V", "S", "D"];

export function dataToPercent() {
  maxValue = Math.max(...data);

  data.map((option, index) => {
    return (dataPercentage[index] = data[index] / maxValue);
  });
  console.log(dataPercentage);
}

export const BarChart = () => {
  dataToPercent();

  return (
    <svg viewBox="0 0 170 120" className="relative">
      {data.map((value, index) => {
        return (
          <>
            <g className="justify-center">
              <text
                x={x[index] + 3}
                y="120"
                fontSize={"10"}
                fill="#ffffff"
                color="white"
              >
                {days[index]}
              </text>
              <rect
                className="fill-cyan-200"
                x={x[index]}
                y={110 - dataPercentage[index] * 100}
                width="20"
                height={dataPercentage[index] * 100}
                rx="3"
              />
              <text
                x={x[index]}
                fill="#ffffff"
                y={110 - dataPercentage[index] * 100 - 5}
                z="3"
                fontSize={"4"}
                color="white"
              >
                {data[index]}
              </text>
            </g>
          </>
        );
      })}
    </svg>
  );
};
