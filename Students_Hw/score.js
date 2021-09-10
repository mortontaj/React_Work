import React from "react";
// import App from "./App";

export default function Score(props) {
  return (
    <div>
      <div id="date"> Date: {props.score.date}</div>
      <br />
      <br />
      <div id="score">Score: {props.score.score}</div>
    </div>
  );
}
