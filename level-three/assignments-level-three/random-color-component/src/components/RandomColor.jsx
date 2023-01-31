import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomColor() {
  const [color, setColor] = useState();
  const [count, setCount] = useState(0);

  async function getData() {
    const response = await axios
      .get(
        `https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`
      )
      .then((response) => {
        setColor(response.data);
      });
    return response;
  }

  useEffect(() => {
    getData();
  }, [count]);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      {color ? (
        <div
          id='random--color'
          style={{ backgroundColor: `#${color.colors[0].hex}` }}
        >
          <button onClick={increaseCount}>Change Background Color</button>
        </div>
      ) : (
        <div id='random--color'>
          <button onClick={increaseCount}>Change Background Color</button>
        </div>
      )}
    </>
  );
}

export default RandomColor;
