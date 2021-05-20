import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Youtube from './Components/Youtube';
import Banners from './Components/Banners';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="header__options">
          <a className='header__optionsBtn' href="#about" >About</a>
          <a className='header__optionsBtn' href="#" >Youtube</a>
          <a className='header__optionsBtn' href="#" >Blogs</a>
          <a className='header__optionsBtn' href="#" >Books</a>
      </div>
      <Banners></Banners>
      <About></About>
      <Youtube></Youtube>
      
    </div>
  );
}

export default App;
