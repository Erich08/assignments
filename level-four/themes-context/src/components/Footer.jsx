import React, { useContext } from 'react';
import { ThemeContext } from '../themContext';

function Footer(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {theme === 'light' ? (
        <div className={`${theme}-theme footer light-footer`}>Footer</div>
      ) : (
        <div className={`${theme}-theme footer dark-footer`}>Footer</div>
      )}
    </>
  );
}

export default Footer;
