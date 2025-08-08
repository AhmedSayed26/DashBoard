import React from "react";
import Header from "../../Components/Header";
import LineChart from "./LineChart";

export default function Line() {
  return (
    <div>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <LineChart></LineChart>
    </div>
  );
}
