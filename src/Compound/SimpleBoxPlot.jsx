import React from "react";
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import "../App.css";
import { useState } from "react";
import getData from "../Data/SimpleBoxPlotData"

function SimpleBoxPlot() {
    const [options, setOptions] = useState({
    container: document.getElementById("myChart"),
    title: {
      text: "Migration Flows to Europe",
    },
    subtitle: {
      text: "Quarterly Overview (April - June 2023)",
    },
    footnote: {
      text: "Source: UN International Organization for Migration",
    },
    data: getData(),
    series: [
      {
        type: "box-plot",
        xKey: "countryOfArrival",
        xName: "Country Of Arrival",
        yName: "Monthly Arrivals",
        minKey: "min",
        minName: "Min",
        q1Key: "q1",
        q1Name: "Q1",
        medianKey: "median",
        medianName: "Median",
        q3Key: "q3",
        q3Name: "Q3",
        maxKey: "max",
        maxName: "Max",
        cornerRadius: 8,
        strokeOpacity: 0,
        whisker: {
          strokeOpacity: 0.9,
        },
        cap: {
          lengthRatio: 0.8,
        },
        tooltip: {
          renderer: (params) => {
            const {
              datum,
              xKey,
              xName,
              minKey,
              minName,
              q1Key,
              q1Name,
              medianKey,
              medianName,
              q3Key,
              q3Name,
              maxKey,
              maxName,
            } = params;
            const values = [
              `${xName}: ${datum[xKey]}`,
              `${minName}: ${datum[minKey]}`,
              `${q1Name}: ${datum[q1Key]}`,
              `${medianName}: ${datum[medianKey]}`,
              `${q3Name}: ${datum[q3Key]}`,
              `${maxName}: ${datum[maxKey]}`,
            ];
            return `<div class="ag-chart-tooltip-title">Monthly Arrivals</div><div class="ag-chart-tooltip-content">${values.join(
              "<br>"
            )}</div>`;
          },
        },
      },
    ],
    axes: [
      {
        type: "category",
        position: "bottom",
        groupPaddingInner: 0,
        paddingInner: 0.7,
        paddingOuter: 0.2,
        gridLine: {
          enabled: true,
        },
        line: {
          enabled: false,
        },
        label: {
          padding: 10,
        },
      },
      {
        type: "number",
        position: "left",
        interval: { values: [105, 385, 2714] },
        line: {
          enabled: false,
        },
      },
    ],
  });

  return (
    <>
    <div style={{
        position: 'fixed', 
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
      }}>
        <AgCharts options={options} style={{width:"100%", height:"100%"}} />
      </div>
    </>
  );
}

export default SimpleBoxPlot;
