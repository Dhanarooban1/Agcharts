import React from 'react'
import { AgCharts } from "ag-charts-react";
import "ag-charts-enterprise";
import "../App.css";
import getData from '../Data/HorizontalBoxPlotDate';

function HorizontalBoxPlot() {
    const options = {
        title: {
          text: "HR Analytics",
        },
        subtitle: {
          text: "Salary Distribution by Role",
        },
        data: getData(),
        series: [
          {
            type: "box-plot",
            direction: "horizontal",
            yName: "Employee Salaries",
            xKey: "role",
            xName: "Role",
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
            strokeWidth: 1,
            cornerRadius: 3,
          },
        ],
        axes: [
          {
            position: "left",
            type: "category",
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
            position: "bottom",
            type: "number",
            line: {
              enabled: false,
            },
            gridLine: {
              enabled: false,
            },
          },
        ],
      };


  return (
    <div
    style={{
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
  )
}

export default HorizontalBoxPlot