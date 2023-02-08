import React, { useContext } from 'react';
import { UglyThingsContext } from '../uglyThingContext';

function Form(props) {
  const { handleChange, addThing, handleSubmit } =
    useContext(UglyThingsContext);

  return (
    <div className='form--container'>
      <h1>Add an Ugly Thing</h1>
      <form onSubmit={handleSubmit}>
        <div id='input-fields'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={addThing.title}
            onChange={handleChange}
          />
          <input
            type='text'
            name='description'
            placeholder='Description'
            value={addThing.description}
            onChange={handleChange}
          />
          <input
            type='text'
            name='imgUrl'
            placeholder='Img URL'
            value={addThing.imgUrl}
            onChange={handleChange}
          />
        </div>
        <button>Add Thing</button>
      </form>
    </div>
  );
}

export default Form;
