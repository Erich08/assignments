import React from 'react';

function Css({ handleChange, options }) {
  const style = {
    background: `linear-gradient(${options.degrees}deg, ${options.color1}, ${options.color2} )`,
  };
  return (
    <div id='css--wrapper'>
      <h1>CSS Gradient Code Generator</h1>
      <div id='css--container'>
        <div id='color--text'>
          <div id='background' style={style}></div>
          <div id='text--area'>
            <textarea
              value={`background: linear-gradient(${options.degrees}deg, ${options.color1}, ${options.color2});\n-moz-background: linear-gradient(${options.degrees}deg, ${options.color1}, ${options.color2});\n-webkit: linear-gradient(${options.degrees}deg, ${options.color1}, ${options.color2});`}
            ></textarea>
          </div>
        </div>
        <div id='form--container'>
          <h2>Options</h2>
          <form name='color-picker'>
            <div id='color1'>
              <label htmlFor='color1'>Color 1</label>
              <p>{options.color1}</p>
              <input
                type='color'
                name='color1'
                value={options.color1}
                onChange={handleChange}
              />
            </div>
            <div id='color2'>
              <label htmlFor='color2'>Color 2</label>
              <p>{options.color2}</p>
              <input
                type='color'
                name='color2'
                value={options.color2}
                onChange={handleChange}
              />
            </div>
            <div id='angle'>
              <label htmlFor='degrees'>Angle</label>
              <input
                type='number'
                name='degrees'
                id='number'
                value={options.degrees}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Css;
