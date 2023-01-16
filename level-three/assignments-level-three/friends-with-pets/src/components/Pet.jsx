import React from 'react';

function Pet({ name, breed, img }) {
  return (
    <div className='pet--container'>
      <h3>{name}</h3>
      <h4>{breed}</h4>
      <img src={img} alt='{name}' />
    </div>
  );
}

export default Pet;
