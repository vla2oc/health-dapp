import React, { useState } from "react";
import { ChartPieDonutText } from "../chart-pie-donut-text";
import { DrawerCalories } from "../DrawerCalories";

export default function AppCalories() {
  return (
    <>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <ChartPieDonutText />
      </div>
      <div className="flex justify-center items-center gap-4">
        <DrawerCalories />
      </div>
    </>
  );
}
