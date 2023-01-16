import React from 'react';
import vacationSpots from '../data';
import Card from './Card';

function Header() {
  const data = vacationSpots.map((item) => <Card {...item} />);

  return (
    <header>
      <div className='header--title'>
        <h1>Vacation Spots</h1>
        <div className='card--spots'>{data}</div>
      </div>
    </header>
  );
}

export default Header;
