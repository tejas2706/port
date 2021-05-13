import React from 'react';
import './styles.css'

function About() {
    return (
        <div className="about" id="about">
            <div className="about__imageAndDetails">
                <div className="about__image">
                    Image
                </div>
                <div className="about__details">
                    <p className="about__detail1 foldtr">
                        Dayanand Nene is a Management Consultant.
                        His company, "<b>Righteous Events and PR</b>" undertakes all types of Marketing, Liaison, Corporate branding work.
                        Political Campaign Strategies & Management, Political Surveys through their unique Election Management System and PR work.
                    </p>

                    <p className="about__detail1 foldtr">
                        Dayanand Nene is also a Director in <br></br><b> &nbsp; ▹ &nbsp;Satark 4Nagrik Foundation ®</b> <br></br> <b>&nbsp; ▹ &nbsp;Grahak Raja Welfare Foundation ®</b> <br></br>Both NGO's registered with Ministry of Corporate Affairs, Govt of India.
                    </p>
                    
                    <p className="about__detail1 foldtr">
                        Dayanand Nene is originally a <b>Swayamsevak</b> who learnt about social work and responsibilities in the Akhil Bharatiya Vidyarthi Parishad.
                        He was the Editor of the <b>ABVP journal Chhatra Shakti</b>.
                        He later graduated into politics and became an active BJP activist. He handled the media for the Mumbai unit of the party for many years.
                    </p>
                </div>
            </div>
            {/* <div className="about__moreDetails">
                More Details
            </div> */}
        </div>
    )
}

export default About