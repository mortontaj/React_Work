import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import BedRoom from "./BedRoom";
import Bath from "./Bath";

export default function FloorPlan() {
  return (
    <div>
      <BedRoom BedNum="1" />
      <Kitchen />
      <Bath size="Full" />
      <BedRoom BedNum="2" />
      <LivingRoom />
      <Bath size="Half" />
      <BedRoom BedNum="3" />
    </div>
  );
}
