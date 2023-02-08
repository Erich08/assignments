import React, { useContext } from 'react';
import { ThemeContext } from '../themContext';

function Main(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme}-theme main`}>
      {theme === 'light' ? (
        <div className='light-main'>
          <h1 className='light-h1'>
            Click the button to toggle the {theme} theme!
          </h1>
          <button onClick={toggleTheme} className='light-btn'>
            Toggle Light
          </button>
        </div>
      ) : (
        <div className='dark-main'>
          <h1 className='dark-h1'>
            Click the button to toggle the {theme} theme!
          </h1>
          <button onClick={toggleTheme} className='dark-btn'>
            Toggle Dark
          </button>
        </div>
      )}
    </div>
  );
}

export default Main;
