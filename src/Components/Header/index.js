import React from 'react';
import './styles.css';
import profileImage from './images/profilePic.jpeg';

function Header() {
    return (
        <div className="header">
            <div className="header__profilePicContainer">
                <img src={profileImage} className="header__profilePic" alt="profilePic"></img>
            </div>
            <div className="header__name">
                DAYANAND NENE<br></br>
                <span className="header__tagline">Analyst ● Strategist ● Activist ● Writer ● Mentor</span>
            </div>
        </div>
    )
}

export default Header;
