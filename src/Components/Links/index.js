import React from 'react';
import './styles.css'
import fbImg from './images/fb.jpeg';
import fbImg1 from './images/fbpage1.png';
import fbImg2 from './images/fbpage2.png';
import fblogo from './images/fbsplashlogo.png';
import youtubelogo from './images/youtubelogo.png';
import youtubePost from './images/youtubepost.png';
import linkedinlogo from './images/linkedinlogo.png';
import linkedinpost from './images/linkedinpost.png';

function Links() {

    return (

        <div className="links" id="about">
            <div className="links__title allTitle">Follow Me On<br></br><h5><i>Click below to visit</i></h5></div>
            <div className="links__container">
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/bjpdayanand/" className="links__facebookContainer fb">
                    <img className="links__image" alt="facebookLink" src={fbImg1}></img>
                    <h5>@bjpdayanand <img src={fblogo} alt='fblogo' className="links__logo_fb"></img></h5>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Thane-Newsmakers-103201175179943/" className="links__facebookContainer fb">
                    <img className="links__image" alt="facebookLink" src={fbImg2}></img>
                    <h5>@Thane-Newsmakers <img src={fblogo} alt='fblogo' className="links__logo_fb"></img></h5>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/dayanandnene" className="links__facebookContainer fb">
                    <img className="links__image" alt="facebookLink" src={fbImg}></img>
                    <h5>@dayanandnene <img src={fblogo} alt='fblogo' className="links__logo_fb"></img></h5>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dayanand-nene-28017311" className="links__facebookContainer linkedin">
                    <img className="links__image" alt="facebookLink" src={linkedinpost}></img>
                    <h5>@dayanand-nene <img src={linkedinlogo} alt='fblogo' className="links__logo_li"></img></h5>
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCprWjZfxzQeV_jGFv2Cjthg" className="links__facebookContainer you">
                    <img className="links__image" alt="facebookLink" src={youtubePost}></img>
                    <h5>@DayanandNeneSpeaks <img src={youtubelogo} alt='fblogo' className="links__logo_you"></img></h5>
                </a>
            </div>

        </div>
    )
}

export default Links;