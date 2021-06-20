import React from 'react';
import './styles.css';
import book1 from './images/1.jpeg';
import book2 from './images/2.jpeg';
import book3 from './images/3.jpeg';
import book4 from './images/4.jpeg';
import book5 from './images/5.jpeg';

function Books() {

    return (
        <div className="books" id="books">
            <div className="books__title allTitle">
                Books Authored
            </div>
            <div className="books__images">
                <div className="books__each">
                    <img className='books__eachBook' src={book1} alt='book1'></img>
                    <h5>CEMENT- A better way to use it.</h5>
                </div>
                <div className="books__each">
                    <img className='books__eachBook' src={book2} alt='book2'></img>
                    <h5>Quick test for Adultrants in food.</h5>
                </div>
                <div className="books__each">
                    <img className='books__eachBook' src={book3} alt='book3'></img>
                    <h5>Modis Gujarat - A Journey towards development.</h5>
                </div>
                <div className="books__each">
                    <img className='books__eachBook' src={book4} alt='book4'></img>
                    <h5>Do's And Dont's in Investing.   </h5>
                </div>
                <div className="books__each">
                    <img className='books__eachBook' src={book5} alt='book5'></img>
                    <h5>Sahakari Bank.</h5>
                </div>
            </div>
        </div>
    )
}

export default Books
