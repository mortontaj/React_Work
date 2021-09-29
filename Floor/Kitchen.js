import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <div id="kitchen">
      <h1>Kitchen</h1>
      <Oven />
      <Sink />
    </div>
  );
}
