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
  handleSubmit,
}) {
  return (
    <div className='form--container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstName'
          value={firstName}
          placeholder='First Name'
          onChange={handleChange}
          minlength='3'
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          placeholder='Last Name'
          onChange={handleChange}
          minlength='3'
        />
        <input
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
          minlength='3'
        />
        <input
          type='text'
          name='birthPlace'
          value={birthPlace}
          placeholder='Place of Birth'
          onChange={handleChange}
          minlength='3'
        />
        <input
          type='tel'
          name='phone'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          value={phone}
          placeholder='Phone'
          onChange={handleChange}
          minlength='3'
        />
        <small>Format: 123-456-7858</small>
        <input
          type='text'
          name='favFood'
          value={favFood}
          placeholder='Favorite Food'
          onChange={handleChange}
          minlength='3'
        />
        <textarea
          name='comments'
          value={comments}
          placeholder='Tell us about yourself'
          onChange={handleChange}
          minlength='3'
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default BadgeForm;
