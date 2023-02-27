import React from "react";
import { useCounterStore } from "../Store";

const Counter = () => {
  const count = useCounterStore((state) => state.number);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const logNumber = useCounterStore((state) => state.logNumber);
  const reset = useCounterStore((state) => state.reset);

  const resetCounter = () => {
    reset();
  };
  return (
    <div className="counter__container">
      <h1>Counter</h1>
      <button onClick={increment}>+</button>
      <h2>{count}</h2>
      <button onClick={decrement}>-</button>
      <div className="inline__btn_container">
        <button onClick={logNumber} className="inline__btn">
          Log number
        </button>
        <button onClick={resetCounter} className="inline__btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
