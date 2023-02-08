import React, { useContext } from 'react';
import { ThemeContext } from '../themContext';

function Header(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {theme === 'light' ? (
        <div className={`${theme}-theme header light-header`}>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      ) : (
        <div className={`${theme}-theme header dark-header`}>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      )}
    </>
  );
}

export default Header;
