import { useState } from 'react';
import './App.css';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <Header />
      <BlogList />
      <BlogPost />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
