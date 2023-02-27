import React from "react";
import { useCounterStore } from "../Store";

const Counter = () => {
  const count = useCounterStore((state) => state.number);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const logNumber = useCounterStore((state) => state.logNumber);

  return (
    <div className="counter__container">
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={logNumber}>Log number</button>
    </div>
  );
};

export default Counter;
