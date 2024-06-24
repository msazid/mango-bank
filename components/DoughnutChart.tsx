"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import React from "react";

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
  const data={
    datasets:[
        {
            label: 'Banks',
            data:[1255, 6997, 5587],
            backgroundColor:['#F89C17', '#027C4F', '#00bf63']
        }
    ],
    labels:['Bank 1', 'Bank 2', 'Bank 3']
  }
  
    return<Doughnut data={data} 
    options={{
        cutout:'60%',
        plugins:{
            legend:{
                display:false
            }
        }
    }}
    />};

export default DoughnutChart;
