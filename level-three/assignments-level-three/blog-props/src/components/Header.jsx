import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <Navbar />
      <div className='blog--title'>
        <h1>Clean Blog</h1>
        <p>A Blog Theme by Start Bootstrap</p>
      </div>
      <img
        src='https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg'
        alt='test'
      />
    </header>
  );
}

export default Header;
