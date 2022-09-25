import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { useState } from "react";
function BarChart() {
  const [socialFirst, setsocialFirst] = useState();

  const [socialSecond, setsocialSecond] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const alcoholName = [];
        const malicacidName = [];
        data.forEach((element) => {
          alcoholName.push(element.Alcohol);
          malicacidName.push(element.Malicacid);
        });
        let calculate = (...arr) => {
          const h1 = arr.slice(0, 59);
          const h2 = arr.slice(59, 130);
          const h3 = arr.slice(130);
          return [h1, h2, h3];
        };
        let [p1, p2, p3] = calculate(...malicacidName);
        let [v1, v2, v3] = calculate(...alcoholName);

        const getAvg = (...array) => {
          const avg =
            array.reduce((sum, curr) => sum + Number(curr), 0) / array.length;
          return parseFloat(avg).toFixed(3);
        };

        let p4 = [getAvg(...p1), getAvg(...p2), getAvg(...p3)];

        let v4 = [v1, v2, v3];

        setsocialFirst(p4);
        setsocialSecond(v4);
      });
  }, []);

  const options = {
    title: {
      text: "Barchart between Alcohol and Malic Acid Average",
    },

    tooltip: {
      trigger: "axis",
    },
    grid: {},
    xAxis: [
      {
        type: "category",
        data: socialSecond,
        name: "Alcohol",

        nameLocation: "center",
        nameTextStyle: { fontSize: 20, padding: 20 },
        axisLabel: {
          width: 50,
          overflow: "truncate",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Malic Acid Average",
        nameLocation: "center",
        nameTextStyle: { fontSize: 20, padding: 15 },
      },
    ],
    series: [
      {
        type: "bar",

        data: socialFirst,
      },
    ],
  };

  return (
    <div>
      <div>
        <ReactECharts option={options} />
      </div>
    </div>
  );
}
export default BarChart;
