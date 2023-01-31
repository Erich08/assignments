import React from 'react';

function BadgeList({
  firstName,
  lastName,
  email,
  birthPlace,
  phone,
  favFood,
  comments,
}) {
  return (
    <div id='badge--container'>
      <div className='header'>Badge</div>
      <div id='name--phone'>
        <h3>
          Name: {firstName} {lastName}
        </h3>
        <h3>Phone: {phone}</h3>
      </div>
      <div id='loc--food'>
        <h3>Place of birth: {birthPlace}</h3>
        <h3>Favorite food: {favFood}</h3>
      </div>
      <div id='email'>
        <h3>Email: {email}</h3>
      </div>
      <div id='comments'>
        <p>{comments}</p>
      </div>
    </div>
  );
}

export default BadgeList;
