import React, { useEffect } from "react";

import { useState } from "react";
import ReactECharts from "echarts-for-react";

function ScatterChart() {
  const [socialFirst, setsocialFirst] = useState();
  const [socialSecond, setsocialSecond] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let colorintensityName = [];
        let hueName = [];
        data.forEach((element) => {
          colorintensityName.push(element.Colorintensity);
          hueName.push(element.Hue);
        });
        setsocialSecond(colorintensityName);
        setsocialFirst(hueName);
      });
  }, []);
  // creating options for using in ReactEChart.
  const options = {
    title: {
      text: "Scatterchart between Color Intensity and Hue ",
    },
    grid: {},
    xAxis: {
      type: "category",
      data: socialSecond,
      name: "Color Intensity",
      nameLocation: "center",
      nameTextStyle: { fontSize: 20, padding: 20 },
    },
    yAxis: {
      type: "value",
      name: "Hue",
      nameLocation: "center",
      nameTextStyle: { fontSize: 20, padding: 15 },
    },
    series: [
      {
        data: socialFirst,
        type: "scatter",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <div>
      <div>
        <ReactECharts option={options} />
      </div>
    </div>
  );
}

export default ScatterChart;
