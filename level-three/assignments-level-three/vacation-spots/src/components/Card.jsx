import React from 'react';

function Card({ place, price, timeToGo }) {
  let time;
  if (timeToGo === 'Fall') {
    time = (
      <div className='card--container' style={{ backgroundColor: 'orange' }}>
        <h2>Location: {place}</h2>
        <h3>Price: ${price}</h3>
        <h4>Best time of year to go: {timeToGo}</h4>
      </div>
    );
  } else if (timeToGo === 'Spring') {
    time = (
      <div className='card--container' style={{ backgroundColor: 'green' }}>
        <h2>Location: {place}</h2>
        <h3>Price: ${price}</h3>
        <h4>Best time of year to go: {timeToGo}</h4>
      </div>
    );
  } else if (timeToGo === 'Winter') {
    time = (
      <div className='card--container' style={{ backgroundColor: 'blue' }}>
        <h2>Location: {place}</h2>
        <h3>Price: ${price}</h3>
        <h4>Best time of year to go: {timeToGo}</h4>
      </div>
    );
  } else {
    time = (
      <div className='card--container' style={{ backgroundColor: 'red' }}>
        <h2>Location: {place}</h2>
        <h3>Price: ${price}</h3>
        <h4>Best time of year to go: {timeToGo}</h4>
      </div>
    );
  }
  return <main>{time}</main>;
}

export default Card;
