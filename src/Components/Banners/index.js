import React from 'react';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
import './styles.css'

function Banners() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    return (
        <div className="banner__container">
            <div id="carousel_1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel_1" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel_1" data-slide-to="1"></li>
                    <li data-target="#carousel_1" data-slide-to="2"></li>
                    <li data-target="#carousel_1" data-slide-to="3"></li>
                    <li data-target="#carousel_1" data-slide-to="4"></li>
                    <li data-target="#carousel_1" data-slide-to="5"></li>
                    <li data-target="#carousel_1" data-slide-to="6"></li>
                    <li data-target="#carousel_1" data-slide-to="7"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 carouselImage" src={img1} alt="First slide" />
                    </div>
                    {
                        images.splice(1).map((each) => {
                            return (
                                <div className="carousel-item">
                                    <img className="d-block w-100 carouselImage" src={each} alt="Second slide" />
                                </div>
                            )
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carousel_1" role="button" data-slide="prev" >
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel_1" role="button" data-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Banners;