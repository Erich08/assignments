import React from 'react';

function BadgeForm({
  firstName,
  lastName,
  email,
  birthPlace,
  phone,
  favFood,
  comments,
  handleChange,
}) {
  return (
    <div className='form--container'>
      <form>
        <input
          type='text'
          name='firstName'
          value={firstName}
          placeholder='First Name'
          onChange={handleChange}
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          placeholder='Last Name'
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
        />
        <input
          type='text'
          name='birthPlace'
          value={birthPlace}
          placeholder='Place of Birth'
          onChange={handleChange}
        />
        <input
          type='text'
          name='phone'
          value={phone}
          placeholder='Phone'
          onChange={handleChange}
        />
        <input
          type='text'
          name='favFood'
          value={favFood}
          placeholder='Favorite Food'
          onChange={handleChange}
        />
        <textarea
          name='comments'
          value={comments}
          placeholder='Tell us about yourself'
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default BadgeForm;
