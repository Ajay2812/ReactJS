import React from "react";
export default function Counter2() {
  const [count, setCount] = React.useState(0);
  function handleIncr() {
    setCount(prev=>prev+1);
  }
  function handleDecr(){
    setCount(prev=>prev-1)
  }
  function handleClick(){
    setCount(prev=>prev+5)
  }
  function handleReset(){
    setCount(0)
  }
  return (
    <>
    <p>Count {count}</p>
      <button onClick={handleIncr}>Increment</button>
      <button onClick={handleDecr}>Decrement</button>
      <button onClick={handleClick}>Increment 5</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
