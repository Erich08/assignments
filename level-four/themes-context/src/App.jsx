import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ThemeContextProvider } from './themContext';

function App() {
  return (
    <div className='App light-theme dark-theme'>
      <ThemeContextProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
