import React from "react";
import PieChart from "./PieChart";
import Header from "../../Components/Header";

export default function Pie() {
  return (
    <div>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <PieChart />
    </div>
  );
}
