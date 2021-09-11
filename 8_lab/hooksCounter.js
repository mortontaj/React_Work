import React, { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Here is your count: {count}</h1>

      <button onClick={() => setCount(count + 1)}> Increment-with-hook</button>
    </div>
  );
}

export default Hooks;
