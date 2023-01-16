import React from 'react';
import Pet from './Pet';

function Friend({ name, age, pets, img }) {
  const friendList = pets.map((item) => (
    <Pet name={item.name} breed={item.breed} img={item.img} />
  ));
  console.log(name);
  return (
    <div className='card--container'>
      <div className='cards'>
        <h1>
          {name} is {age} years old and has the following pet(s):
        </h1>
        {friendList}
      </div>
    </div>
  );
}

export default Friend;
