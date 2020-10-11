import React, { useEffect, useState } from "react";
import "./styles.css";

const result = {};
const have = {
  2: {full: 0, notFull:0},
  3: {full: 0, notFull:0},
  4: {full: 0, notFull:0},
  5: {full: 0, notFull:0}
};

export default function App() {
  const [count, updateCount] = useState(1);
  const [haveCount, setHaveCount] = useState(have);

  function getAmount(star, number) {
    const next = star - 1;
    result[star] = number;
    if (star <= 2) {
      return number;
    }
    const totalHave = haveCount[next].full + haveCount[next].notFull
    return getAmount(next, star * number - totalHave);
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
    if(e.target.id==='full'){
      setHaveCount((prev) => ({ ...prev, 5: {...prev[5], full: +value} }));
    }
    else if(e.target.id==='not_full'){
      setHaveCount((prev) => ({ ...prev, 5: {...prev[5], notFull: +value} }));
    }
  };

  const updateFour = (e) => {
    const value = e.target.value;
    if(e.target.id==='full'){
      setHaveCount((prev) => ({ ...prev, 4: {...prev[4], full: +value} }));
    }
    else if(e.target.id==='not_full'){
      setHaveCount((prev) => ({ ...prev, 4: {...prev[4], notFull: +value} }));
    }
  };

  const updateThree = (e) => {
    const value = e.target.value;
    if(e.target.id==='full'){
      setHaveCount((prev) => ({ ...prev, 3: {...prev[3], full: +value} }));
    }
    else if(e.target.id==='not_full'){
      setHaveCount((prev) => ({ ...prev, 3: {...prev[3], notFull: +value} }));
    }  
  };

  const updateTwo = (e) => {
    const value = e.target.value;
    if(e.target.id==='full'){
      setHaveCount((prev) => ({ ...prev, 2: {...prev[2], full: +value} }));
    }
    else if(e.target.id==='not_full'){
      setHaveCount((prev) => ({ ...prev, 2: {...prev[2], notFull: +value} }));
    }  
  };

  const StarItem = ({star, curr, handleChange, need})=> {
    return (
      <div>
        {star} have: full <input id="full" value={curr.full} onChange={handleChange} /> not full <input id="not_full" value={curr.notFull} onChange={handleChange} /> need: <span>{need} </span>
      </div>
    )
  }

  return (
    <div className="App">
      6 want: <input id="full" value={count} onChange={changeCount} /> need: <span>{result[6]} </span>
      <StarItem star={5} curr={haveCount[5]} handleChange={updateFive} need={result[5]}/>
      <StarItem star={4} curr={haveCount[4]} handleChange={updateFour} need={result[4]}/>
      <StarItem star={3} curr={haveCount[3]} handleChange={updateThree} need={result[3]}/>
      <StarItem star={2} curr={haveCount[2]} handleChange={updateTwo} need={result[2]}/>
    </div>
  );
}
