import React from 'react';
import './styles.css';
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import image3 from './images/3.jpeg';
import image4 from './images/4.jpeg';
import image5 from './images/5.jpeg';

function CovidFight() {
    return (
        <div className="CovidFight" id="CovidFight">
            <div className="CovidFight__title">
                Our Fight Against Covid<br></br><br></br>
            </div>
            <div>
                The Covid 2nd wave has hit us like a tsunami.
                In a very short span it engulfed thousands of people. Beds, medicines became scarce. Livelihood was hit.
                <br></br><br></br>

                In order to help the poor to navigate through these bad times during the lockdown, Satark Nagrik Foundation ® started working round the clock to ease the distress of about 200 marginalised individuals by serving them with dry rations and groceries.
                <br></br>Within few days of launching the initiative, we have distributed the groceries, facilitated procurement of medicines and helping in getting hospital beds to about 500 needy families across Mumbai and Thane.
                <br></br><br></br>

                We are distributing ration and hygiene kits to children who are at home in lockdown and daily wage earning workers. Our target is to reach to 1000 families.
                <br></br><br></br>
                <div className="CovidFight__images">
                    <img className='CovidFight__image' src={image1} alt='cov1'></img>
                    <img className='CovidFight__image' src={image2} alt='cov2'></img>
                </div>
                <br></br><br></br>
                <br></br><br></br>

                <h3><b>Satark Nagrik Foundation ®</b></h3>
                [Alert Citizens Forum]
                <br></br><br></br>

                The second wave of Corona Virus has brought the world on its knees and has yet again created an international pandemic emergency situation.
                With the spread of the Corona Virus, many families are stuck inside their homes and hospital wards that too sick and quarantined.
                Satark Nagrik Foundation ® has taken a pledge to help the families struck by the pandemic by offering food and medical services in this time of distress.
                People from all across the country are coming forward to help and we are not far behind.
                <br></br><br></br>

                Satark Nagrik Foundation ®  has started the campaign 'Sathi Hath Badhana' for offering facilities like meals delivered at the doorstep, facilitsting access to oxygen cylinders, medicine kits and ambulance service to those infected by Covid-19.
                All of these services are being offered free of cost.
                <br></br><br></br>
                <div className="CovidFight__images">
                    <img className='CovidFight__image' src={image3} alt='cov3'></img>
                    <img className='CovidFight__image' src={image4} alt='cov4'></img>
                    <img className='CovidFight__image' src={image5} alt='cov5'></img>
                </div>

                <br></br><br></br>

                <b>So far we've distributed:</b>
                <br></br>

                ❧ Through our network, a free sanitization facility and a Covid-19 helpline number are also being provided to the patients who have recovered and need to get their homes sanitized.
                <br></br><br></br>

                ❧ Along with the relief measures, Satark Nagrik Foundation is also creating awareness related to Corona Virus by making people understand the importance of sanitizing & social distancing to protect them from getting vulnerable & prone to infection.
                <br></br><br></br>

                ❧ Relief measures by Satark Nagrik Foundation for COVID 19 distressed: <br></br>
                &nbsp;&nbsp;⁃ Providing Cooked Food & Ration for Needy,.<br></br>
                &nbsp;&nbsp;⁃ Providing access free of cost oxygen cylinders.<br></br>
                &nbsp;&nbsp;⁃ Providing Masks and medicine.<br></br>
                &nbsp;&nbsp;⁃ Providing access to Hydraulic beds to patients.<br></br>
                &nbsp;&nbsp;⁃ Sanitizing areas that are most vulnerable.<br></br>
                &nbsp;&nbsp;⁃ Corona Relief Seva till date.<br></br>
                &nbsp;&nbsp;⁃ Food packets served.<br></br>
                &nbsp;&nbsp;⁃ Rations served.<br></br>
                &nbsp;&nbsp;⁃ Mask distributed.<br></br>
                &nbsp;&nbsp;⁃ PPE Kit distributed.<br></br>
                &nbsp;&nbsp;⁃ Vaccination camps organised..<br></br>
            </div>
        </div>
    )
}

export default CovidFight