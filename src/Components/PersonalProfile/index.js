import React from 'react';
import './styles.css';
import image2 from './images/2.jpeg';

function PersonalProfile() {
    return (
        <div className="personalProfile" id="personalProfile">
            <div className="personalProfile__title allTitle">
                Personal Profile
            </div>
            <div className="personalprofile__content">
            <div className="bussinessProfile__imageDiv">
                    <img className='personalprofile__image' src={image2} alt='image2'></img>
                </div>
                Dayanand Nene is a <b style={{color:'rgb(209, 195, 0)' }}>Management Consultant</b>.
                His company, <b style={{color:'rgb(209, 195, 0)' }}>Righteous Events and PR</b> undertakes all types of Marketing, Liaison, Corporate branding work.
                Political Campaign Strategies & Management, Political Surveys thru' their unique Election Management System and PR work.
                <br></br><br></br>
                Dayanand Nene is also a Director in <b style={{color:'rgb(209, 195, 0)' }}>Satark 4Nagrik Foundation ®</b> and <b style={{color:'rgb(209, 195, 0)' }}>Grahak Raja Welfare Foundation ® </b>- both NGO's registered with Ministry of Corporate Affairs, Govt of India.
                <br></br><br></br>

                Dayanand Nene is originally a Swayamsevak who learnt about social work and responsibilities in the Akhil Bharatiya Vidyarthi Parishad.
                He was the <b style={{color:'rgb(209, 195, 0)' }}>Editor of the ABVP journal Chhatra Shakti</b>.
                Later, he started getting involved in politics, inspired by Shri Atal Bihari Vajpayee. He has been a BJP ex office bearer and activist since 30 years and has been the Press Secretary of the Mumbai unit and member of the State executive committee. He has handled various responsibilities given by the party.
                <br></br><br></br>

                He has also been connected and has had good contacts with the Intelligence wing.<br></br>
                He has an indepth study about the Middle East Asia affairs and has written many articles on the situation and politics of that area.
                He was a member of the <b style={{color:'rgb(209, 195, 0)' }}>Film Censor Board</b> and the Railways Passenger Consultative Committee.
                <br></br><br></br>

                He started his <b style={{color:'rgb(209, 195, 0)' }}>psephology venture</b>: Election Management System in 2012. He conducted accurate survey during the Gujarat Elections in 2012, Loksabha election of 2014, Corporation elections in 2017 for Mumbai, Thane, Pune and Pimpri Chinchwad corporations.
                <br></br><br></br>

                He is very active in the Consumer field: National Secretary of Consumer Protection Service Council; Convener of Small Investors Forum and Sahakarsutra.
                <br></br><br></br>

                Through these organization, he provides free online guidance to people on Consumer and Investor rights and Cooperative Housing Society Matters.
                He has a popular blog called Casa Devalaya - which gives information about our temples in the country, our religious heritage and importance & information about how to conduct different puja's.
            </div>
            <span style={{color:'white'}}>.&nbsp;&nbsp;.&nbsp;&nbsp;.</span>
        </div>
    )
}

export default PersonalProfile
