import React from "react";
import BarChart from "./BarChart";
import Header from "../../Components/Header";

export default function Bar() {
  return (
    <>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <BarChart />
    </>
  );
}
