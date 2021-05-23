import React from 'react';
import './styles.css'
import fbImg from './images/fbposts.png';
import fblogo from './images/fbsplashlogo.png';
import twitterPost from './images/twitterPost.png'
import twlogo from './images/twlogo.png';
import instapost from './images/instpost1.jpeg';
import instlogo from './images/instlogo.png';
import youtubelogo from './images/youtubelogo.png';
import youtubePost from './images/youtubepost.png';

function Links() {

    return (

        <div className="links" id="about">
            <div className="links__title">----- Follow Me On -----</div>
            <div className="links__container">
                <a href="https://www.facebook.com/dayanandnene" className="links__facebookContainer fb">
                    <img className="links__image" alt="facebookLink" src={fbImg}></img>
                    <h5>Facebook <img src={fblogo} alt='fblogo' className="links__logo_fb"></img></h5>
                </a>
                <a href="https://twitter.com/dayanandnene" className="links__facebookContainer tw">
                    <img className="links__image" alt="facebookLink" src={twitterPost}></img>
                    <h5>Twitter <img src={twlogo} alt='fblogo' className="links__logo_tw"></img></h5>
                </a>
                <a href="https://www.instagram.com/dayanandnene/" className="links__facebookContainer inst">
                    <img className="links__image" alt="facebookLink" src={instapost}></img>
                    <h5>Instagram <img src={instlogo} alt='fblogo' className="links__logo_inst"></img></h5>
                </a>
                <a href="https://www.youtube.com/channel/UCprWjZfxzQeV_jGFv2Cjthg" className="links__facebookContainer you">
                    <img className="links__image" alt="facebookLink" src={youtubePost}></img>
                    <h5>Youtube <img src={youtubelogo} alt='fblogo' className="links__logo_you"></img></h5>
                </a>
            </div>

        </div>
    )
}

export default Links;