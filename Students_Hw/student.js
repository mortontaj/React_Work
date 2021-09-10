import React from "react";
import Score from "./score";
// import App from "./App";

export default function Student(props) {
  return (
    <div>
      <div id="name">Name: {props.student.name}</div>
      {/* <br />
      <br /> */}
      <div id="bio">Bio: {props.student.bio}</div>
      <br />
      <br />
      <div id="scores_list">
        Scores:{" "}
        {props.student.scores.map((scores, index) => (
          <Score score={scores} key={index} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}
