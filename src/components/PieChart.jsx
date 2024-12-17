"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ complete, uncomplete }) => {
  // Chart Data
  const data = {
    labels: ["Complete", "Uncomplete"],
    datasets: [
      {
        label: "Task Completion",
        data: [complete, uncomplete],
        backgroundColor: ["#a66500", "#f0f0f0"], // Colors for sections
        hoverOffset: 4,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          generateLabels: (chart) => {
            const dataset = chart.data.datasets[0];
            return chart.data.labels.map((label, index) => ({
              text: label,
              fillStyle: dataset.backgroundColor[index],
              fontColor: "#000",
              strokeStyle: dataset.backgroundColor[index],
              hidden: false,
            }));
          },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  // Styling for rounded-full background
  const legendStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 12px",
    borderRadius: "9999px",
    margin: "4px",
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
