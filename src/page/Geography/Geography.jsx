import React from "react";
import GeoChart from "./GeoChart";
import Header from "./../../Components/Header";

export default function Geography() {
  return (
    <div>
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <GeoChart></GeoChart>
    </div>
  );
}
