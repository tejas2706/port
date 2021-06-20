import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Youtube from './Components/Youtube';
import Banners from './Components/Banners';
import Links from './Components/Links';
import Blogs from './Components/Blogs';
import Books from './Components/Books';
import PersonalProfile from './Components/PersonalProfile';
import BussinessProfile from './Components/BussinessProfile';
import InfoLine from './Components/InfoLine';
import CovidFight from './Components/CovidFight';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <div className="header__options">
          <a className='header__optionsBtn' href="#personalProfile" >Personal Profile</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#bussinessProfile" >Bussiness Profile</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#youtube" >Youtube</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#blogs" >Blogs</a>
          {/* <span style={{color: 'white'}}>|</span> */}
          <a className='header__optionsBtn' href="#gallery" >Gallery</a>
      </div>
      <InfoLine></InfoLine>
      <Banners></Banners>
      <About></About>
      <Links></Links>
      <Youtube></Youtube>
      <Blogs></Blogs>
      <Books></Books>
      <CovidFight></CovidFight>
      <PersonalProfile></PersonalProfile>
      <BussinessProfile></BussinessProfile>
      <Contact></Contact>
    </div>
  );
}

export default App;
