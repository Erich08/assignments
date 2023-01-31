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
  isFormValid,
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
          minLength='3'
          required
        />
        <input
          type='text'
          name='lastName'
          value={lastName}
          placeholder='Last Name'
          onChange={handleChange}
          minLength='3'
          required
        />
        <input
          type='email'
          name='email'
          value={email}
          placeholder='Email'
          onChange={handleChange}
          minLength='3'
          required
        />
        <input
          type='text'
          name='birthPlace'
          value={birthPlace}
          placeholder='Place of Birth'
          onChange={handleChange}
          minLength='3'
          required
        />
        <input
          type='tel'
          name='phone'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          value={phone}
          placeholder='Phone'
          onChange={handleChange}
          minLength='3'
          required
        />
        <small>Format: 123-456-7858</small>
        <input
          type='text'
          name='favFood'
          value={favFood}
          placeholder='Favorite Food'
          onChange={handleChange}
          minLength='3'
          required
        />
        <textarea
          name='comments'
          value={comments}
          placeholder='Tell us about yourself'
          onChange={handleChange}
          minLength='3'
          required
        />
        {!isFormValid ? (
          <button style={{ backgroundColor: 'gray', cursor: 'default' }}>
            Submit
          </button>
        ) : (
          <button>Submit</button>
        )}
      </form>
    </div>
  );
}

export default BadgeForm;
