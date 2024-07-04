import React from 'react';
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import "../App.css";
import getData from '../Data/Waterfall';
function Waterfall() {

  const numberFormatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  const options = {
    data: getData(),
    title: {
      text: "FTSE 100 Index",
    },
    subtitle: {
      text: "October (2023)",
    },
    footnote: {
      text: "Net Variation: -4.12%",
    },
    series: [
      {
        type: "waterfall",
        xKey: "date",
        xName: "Date",
        yKey: "percentageChange",
        yName: "Change",
        line: {
          lineDash: [2],
          strokeOpacity: 0.5,
        },
        totals: [
          {
            totalType: "total",
            index: 10,
            axisLabel: "Net\nVariation",
          },
        ],
        item: {
          positive: {
            name: "+",
            label: {
              formatter: ({ value }) => `↑${value}`,
            },
            fillOpacity: 0.7,
            strokeWidth: 1,
          },
          negative: {
            name: "-",
            label: {
              formatter: ({ value }) => `↓${value}`,
            },
            fillOpacity: 0.7,
            strokeWidth: 1,
          },
          total: {
            label: {
              placement: "inside",
              fontSize: 11,
              formatter: ({ value }) => `↓${Math.abs(value)}`,
            },
            fillOpacity: 0.3,
          },
        },
      },
    ],
    axes: [
      {
        position: "right",
        type: "number",
        label: {
          padding: 20,
          formatter: ({ value }) => `${value}%`,
        },
        crosshair: {
          label: {
            renderer: ({ value }) =>
              `<div style="padding: 0 7px; border-radius: 2px; line-height: 1.7em; background-color: rgb(71,71,71); color: rgb(255, 255, 255);">${numberFormatter.format(value)}%</div>`,
          },
        },
      },
      {
        position: "bottom",
        type: "category",
        line: {
          enabled: false,
        },
        label: {
          padding: 20,
          formatter: ({ value }) =>
            `${
              value === "Net\nVariation"
                ? value
                : new Date(value).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
            }`,
        },
        interval: {
          minSpacing: 100,
        },
        tick: {
          size: 0,
        },
      },
    ],
  };

  return (
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
  );
}

export default Waterfall;