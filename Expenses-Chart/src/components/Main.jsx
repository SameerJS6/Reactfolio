import React from "react";
import "./Styles/Main.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Main() {
  const state = {
    labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 5,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };

  return (
    <>
      <main>
        <div className="chart-box">
          <h2 className="track-in">Spending - Last 7 days</h2>
          <div className="chart">
            <Bar data={state} />
          </div>
        </div>

        <div className="total-box">
          <div className="total-content">
            <p className="track-in">Total this month</p>
            <h1 className="tracking-in-bottom">$478.33</h1>
          </div>

          <div className="total-content">
            <h3 className="track-in">+2.4%</h3>
            <p className="tracking-in-bottom">from last month</p>
          </div>
        </div>
      </main>
    </>
  );
}
