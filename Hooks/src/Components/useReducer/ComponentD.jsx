import { CountContext } from "../../App";
import React from "react";

export default function ComponentD() {
  const countContext = React.useContext(CountContext);
  return (
    <>
      Component D
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </>
  );
}
