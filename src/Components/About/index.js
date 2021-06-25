import React, { useState } from 'react';
import './styles.css'
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import flower from './images/flower.jpeg';

function About() {

    const [morePC, setMorePC] = useState(null);
    const [morePR, setmorePR] = useState(null);
    const [moreWT, setMoreWT] = useState(null);
    const [moreAct, setMoreAct] = useState(null);
    const [moreMent, setMoreMent] = useState(null);

    return (

        <div className="about" id="about">
            <div className="about__title allTitle"><img src={flower} alt='flower'></img> About Me <img src={flower} alt='flower'></img></div>
            <div className="about__details">
                <div className="about__detail">
                    <div className="about__details_header" onClick={() => setMorePC(!morePC)}>
                        <p>➥ Political Consultant.&nbsp;&nbsp;&nbsp;
                            {morePC ?
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                                :
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            }
                        </p>
                    </div>
                    <div>
                        {
                            morePC ? <p>
                                <div className="about__pcImages">
                                    <img className='about__image' src={image1} alt='image1'></img>
                                    <img className='about__image' src={image2} alt='image2'></img>
                                </div>
                               <b>Advising and assisting political campaigns</b>. Development and production of mass media (largely television and direct mail), 
                               advise campaigns on many other activities ranging from opposition research and voter polling, to field strategy and get out the vote efforts & political surveys.
                               </p> : null
                        }
                    </div>
                </div>
                <div className="about__detail">
                    <div className="about__details_header" onClick={() => setmorePR(!morePR)}>
                        <p>➥ Public Relations.&nbsp;&nbsp;&nbsp;
                            {morePR ?
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                                :
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            }
                        </p>
                    </div>
                    <div>
                        {
                            morePR ? <p>
                                A <b>Communications Specialist</b> also called Public Relations Guru.
                                Expert in handling public relations, information output, press releases and media requests, social media and/or advertising efforts.
                                </p> : null
                        }
                    </div>
                </div>
                <div className="about__detail">
                    <div className="about__details_header" onClick={() => setMoreWT(!moreWT)}>
                        <p>➥ Writer and Thinker.&nbsp;&nbsp;&nbsp;
                            {moreWT ?
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                                :
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            }
                        </p>
                    </div>
                    <div>
                        {
                            moreWT ? <p>
                                Writing and Thinking gives form and discipline to ideas. 
                                Committing notions to paper gives clarity, tests logic, and inevitably brings up even more ideas.
                                </p> : null
                        }
                    </div>
                </div>
                <div className="about__detail">
                    <div className="about__details_header" onClick={() => setMoreAct(!moreAct)}>
                        <p>➥ Activist.&nbsp;&nbsp;&nbsp;
                            {moreAct ?
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                                :
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            }
                        </p>
                    </div>
                    <div>
                        {
                            moreAct ? <p>
                                He is an activist who works hands on to support a cause. 
                                From handing out pamphlets about socio-political issues, to making powerful speeches, to organising and uniting people - he has done it all.
                                </p> : null
                        }
                    </div>
                </div>
                <div className="about__detail">
                    <div className="about__details_header" onClick={() => setMoreMent(!moreMent)}>
                        <p>➥ Mentor.&nbsp;&nbsp;&nbsp;
                            {moreMent ?
                                <i class="fa fa-caret-up" aria-hidden="true"></i>
                                :
                                <i class="fa fa-caret-down" aria-hidden="true"></i>
                            }
                        </p>
                    </div>
                    <div>
                        {
                            moreMent ? <p>
                                As a mentor - personally and through his blogs Dayanand Nene share s with his proteges information about their career path, as well as provides guidance, motivation, emotional support, and role modeling.
                                He helps with exploring careers, setting goals, developing contacts, and identifying resources.
                                </p> : null
                        }
                    </div>
                </div>
            </div>
        </div>


















        // <div className="about" id="about">
        //     <h3 className="about__title">About Me</h3>
        //     <div className="about__details">
        //         <div className='about__detail1'>
        //             <div className="about__details_header" onClick={() => setMorePC(!morePC)}>
        //                 <p>➥ Political Consultant.</p>
        //                 <i class="fa fa-caret-down" aria-hidden="true"></i>
        //             </div>
        //             <div>
        //                 {
        //                     morePC ? <p>
        //                         His company, "<b>Righteous Events and PR</b>" undertakes all types of Marketing, Liaison, Corporate branding work.
        //                             Political Campaign Strategies & Management, Political Surveys through their unique Election Management System and PR work.
        //                         </p> : null
        //                 }
        //             </div>
        //         </div>
        //         <div className='about__detail1'>
        //             <div className="about__details_header" onClick={() => setMorePC(!morePC)}>
        //                 <p>➥ Political Consultant.</p>
        //                 <i class="fa fa-caret-down" aria-hidden="true"></i>
        //             </div>
        //             <div>
        //                 {
        //                     morePC ? <p>
        //                         His company, "<b>Righteous Events and PR</b>" undertakes all types of Marketing, Liaison, Corporate branding work.
        //                             Political Campaign Strategies & Management, Political Surveys through their unique Election Management System and PR work.
        //                         </p> : null
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default About