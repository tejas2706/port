import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Youtube from './Components/Youtube';
import Banners from './Components/Banners';
import Links from './Components/Links';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="header__options">
          <a className='header__optionsBtn' href="#about" >About</a>
          <span style={{color: 'white'}}>|</span>
          <a className='header__optionsBtn' href="#youtube" >Youtube</a>
          <span style={{color: 'white'}}>|</span>
          <a className='header__optionsBtn' href="#blogs" >Blogs</a>
          <span style={{color: 'white'}}>|</span>
          <a className='header__optionsBtn' href="#books" >Books</a>
      </div>
      <Banners></Banners>
      <About></About>
      <Links></Links>
      <Youtube></Youtube>
      
    </div>
  );
}

export default App;
