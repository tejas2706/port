import React from 'react';
import './styles.css';
import flag from './images/flag2.png';

function Contact() {
    return (
        <div className="Contact">
            <div>
                <img src={flag} alt='flag'></img> &nbsp;&nbsp;<h3>Dayanand Nene</h3> &nbsp;&nbsp;<img src={flag} alt='flag'></img>
            </div>
            <p>dayanandnene@gmail.com</p>
            <br></br>
            <div>✼••┈┈┈┈••✼♡✼••┈┈┈┈••✼</div>
        </div>
    )
}

export default Contact
