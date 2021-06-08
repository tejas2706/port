import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Youtube from './Components/Youtube';
import Banners from './Components/Banners';
import Links from './Components/Links';
import Blogs from './Components/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="header__options">
          <a className='header__optionsBtn' href="#about" >Personal Profile</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#youtube" >Bussiness Profile</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#youtube" >Youtube</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#books" >Blogs</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#books" >Gallery</a>
      </div>
      <Banners></Banners>
      <About></About>
      <Links></Links>
      <Youtube></Youtube>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
