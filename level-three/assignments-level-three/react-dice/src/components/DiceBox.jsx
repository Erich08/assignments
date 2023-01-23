import React from 'react';
import { useState } from 'react';

function DiceBox() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const randomNums = [];
  function handleClick() {
    for (let i = 0; i < 6; i++) {
      randomNums.push(Math.ceil(Math.random() * 6));
    }
    setNumbers(randomNums);
  }
  return (
    <div className='container'>
      <div className='button--container'>
        <button onClick={handleClick}>Roll Dice</button>
      </div>
      <div className='numbers--container'>
        {numbers.map((num, index) => (
          <div className='dice' key={index}>
            <h1>{num}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiceBox;
