import { useState } from 'react';
import './App.css';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
