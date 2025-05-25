"use client"
import {Chart as ChartJs, ArcElement, Legend, Tooltip } from 'chart.js'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJs.register(ArcElement, Tooltip,Legend)

const DoughnutChart = ({accounts} :DoughnutChartProps) => {
  const data = {
    labels: [
      'Bank1',
      'Bank2',
      'Bank3'
    ],
    datasets: [{
      label: 'Banks',
      data: [1300, 1150, 1100],
      backgroundColor: [
        '#0747b6',
        '#2265d8',
        '#2591fa'
      ],
      hoverOffset: 4
    }]
  };
  return (
    <Doughnut data={data} options={{cutout:'60%',plugins:{legend: {
      display: false
    }}}}/>
  )
}

export default DoughnutChart
