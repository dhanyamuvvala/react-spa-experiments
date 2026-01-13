import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Counter</h2>

      <div className="count">{count}</div>

      <div className="btn-group">
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  );
}

export default Counter;
