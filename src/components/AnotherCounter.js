import React from "react";
import { useCounterStore } from "../Store";

const AnotherCounter = () => {
  const count = useCounterStore((state) => state.number);
  const user = useCounterStore((state) => state.user);
  return (
    <div>
      <h1>from different component: {count}</h1>
      <p>
        {user.name} {user.lastName}
      </p>
    </div>
  );
};

export default AnotherCounter;
