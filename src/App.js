import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="padre">
      <div className="main">
        <header>
          <p>useState Hook Test</p>
        </header>
        <div className="display">
          <p>{count}</p>
        </div>
        <div>
          <button className="btn-count" onClick={() => setCount(count + 1)}>
            A
          </button>
          <button
            className="btn-count"
            onClick={() => setCount(count == 0 ? 0 : count - 1)}
          >
            B
          </button>
          <button className="btn-reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
