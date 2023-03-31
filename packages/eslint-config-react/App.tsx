import React, { useState } from "react";

function App(): JSX.Element {
  var a = 1;

  if (a > 0) {
    const [count, setCount] = useState(1);
  }

  return (
    <div>
      hello
    </div>
  );
}