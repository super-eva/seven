import React, { useEffect, useState } from "react";
import "./styles.css";

const result = {};
const have = {
  2: 0,
  3: 0,
  4: 0,
  5: 0
};

export default function App() {
  const [count, updateCount] = useState(2);
  const [haveCount, setHaveCount] = useState(have);

  function getAmount(star, number) {
    const next = star - 1;
    result[star] = number;
    if (star <= 2) {
      return number;
    }
    return getAmount(next, star * number - haveCount[next]);
  }

  function getResult(count) {
    getAmount(6, count);
  }
  getResult(count);
  const changeCount = (e) => {
    updateCount(e.target.value);
  };

  const updateFive = (e) => {
    const value = e.target.value;
    setHaveCount((prev) => ({ ...prev, 5: +value }));
  };

  const updateFour = (e) => {
    const value = e.target.value;
    setHaveCount((prev) => ({ ...prev, 4: +value }));
  };

  const updateThree = (e) => {
    const value = e.target.value;
    setHaveCount((prev) => ({ ...prev, 3: +value }));
  };

  const updateTwo = (e) => {
    const value = e.target.value;
    setHaveCount((prev) => ({ ...prev, 2: +value }));
  };

  return (
    <div className="App">
      <div>
        6 want: <input value={count} onChange={changeCount} /> need:{" "}
        <span>{result[6]} </span>
      </div>
      <div>
        5 have: <input value={haveCount[5]} onChange={updateFive} /> need:{" "}
        <span>{result[5]} </span>
      </div>
      <div>
        4 have: <input value={haveCount[4]} onChange={updateFour} /> need:{" "}
        <span>{result[4]} </span>
      </div>
      <div>
        3 have: <input value={haveCount[3]} onChange={updateThree} /> need:{" "}
        <span>{result[3]} </span>
      </div>
      <div>
        2 have: <input value={haveCount[2]} onChange={updateTwo} /> need:{" "}
        <span>{result[2]} </span>
      </div>
    </div>
  );
}
