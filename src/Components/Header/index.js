import React from 'react';
import './styles.css';

function Header() {
    return (
        <div className="header">
            <div className="header__name">
                DAYANAND<br></br> NENE
            </div>
            <div className="header__tagLineAndOptions">
                <div className="header__tagline">
                    Man for all seasons.<br></br>
                    Man for all reasons.
                </div>
            </div>
        </div>
    )
}

export default Header;
