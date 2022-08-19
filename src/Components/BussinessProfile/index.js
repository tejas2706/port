import React from 'react';
import './styles.css';
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';

function BussinessProfile() {
    return (
        <div className="bussinessProfile" id="bussinessProfile">
            <div className="bussinessProfile__title allTitle">
                Business Profile<br></br><br></br>
                <h2 style={{ fontFamily: "fantasy" }}>Righteous Events and PR</h2>
            </div>
            <div>
                <div className="bussinessProfile__imageDiv">
                    <img className='bussinessProfile__image' src={image1} alt='image1'></img>
                </div>
                <br></br>
                <div className="bussinessProfile__content">
                    <span style={{ fontSize: "30px" }}><b><u>About US</u></b></span><br></br><br></br>
                    <div style={{ color: "rgb(214, 0, 0)" }}><b>
                        You have a Unique Product.
                        The Challenge is letting others know about it!</b>
                        <br></br>
                        <br></br>
                    </div>
                    <div>
                        <span style={{ fontSize: '25px' }}>➺</span> Through our company Righteous - we create and execute a PR strategy,
                        helping a business house or individual cultivate a positive reputation through various unpaid or earned channels and formats,
                        including press, social media, and in-person engagements.
                        <br></br>
                        <span style={{ fontSize: '25px' }}>➺</span> We help clients defend their reputations during crises that threaten their credibility.
                        <br></br>
                        <span style={{ fontSize: '25px' }}>➺</span> We help portray your brand's reputation, idea, product, position, or
                        accomplishments in a positive light.<br></br>
                        <span style={{ fontSize: '25px' }}>➺</span> We tell your stories through unpaid or earned media.
                    </div>
                    <div>
                        <span style={{ fontSize: '25px' }}>➺</span> <b>These unpaid or earned avenues include:</b>
                        <ul>
                            <li>News and press.</li>
                            <li>Media outreach.</li>
                            <li>Social media.</li>
                            <li>Speaking engagements.</li>
                        </ul>
                    </div>
                    <div>
                        <span style={{ fontSize: '25px' }}>➺</span> Public relations extends to government and political parties too.
                        We execute political campaigns or explain a government’s new policy to the public. In this case, we work to maintain a healthy and productive
                        relationship between the client ( the government or political party ) and the general public, who have a right to hear about new policies.
                    </div>
                    <div>
                        <br></br><br></br>
                        <span style={{ fontSize: "30px" }}><b><u>Tackling negative publicity </u></b></span><br></br><br></br>
                        <span style={{ fontSize: '25px' }}>➺</span> We also are experts in tackling negative publicity - by putting across the clients point of view in a hostile environment and changing peoples perception.<br></br>
                        <b>This we achieve thru:</b>
                        <ul>
                            <li>Crisis communications.</li>
                            <li>Damage control.</li>
                            <li>Response and/or apology messaging</li>
                            <li>Reputation restoration strategy</li>
                        </ul>
                        <span style={{ fontSize: '25px' }}>➺</span> We are adept at handling a wide variety of both good and bad circumstances and address these events so the
                        public and client can maintain a beneficial relationship. We also advise the managements on the best policy decisions or actions to take and conducting programs,
                        such as fundraising or networking events, to help the public understand the organization’s goals.<br></br>
                        <span style={{ fontSize: '25px' }}>➺</span>We believe that our clients should not use PR just as a strategy to influence a story after it happens --
                        we convince them to write that story in the first place.<br></br>

                    </div>
                    <div>
                        <br></br><br></br>
                        <span style={{ fontSize: "30px" }}><b><u>Political PR </u></b></span><br></br><br></br>
                        <span style={{ fontSize: '25px' }}>➺</span> Political PR is our forte. Politicians work on their image. How the public perceives them can affect the outcome of future elections. 
                        That’s why they make sure to always show off their best side and remain in the public eye.<br></br>
                        <span style={{ fontSize: '25px' }}>➺</span>Organizing conferences, political debates, and other relevant events is the forte of our PR team. 
                        We create opportunities and events that a politician can attend to increase their awareness.<br></br>
                        <b>We achieve that thru:</b>
                        <ul>
                            <li><b>News management:</b> Most people are aware of PR's influence in news management. Effective political public relations involve engaging journalists and news sources to cover 
                                topics of critical importance, such as holding special news conferences or creating press releases. But, generally, most people probably believe that PR management ends there.
                                Nothing could be further from the truth.
                            </li>
                            <li><b>Issue management:</b>Issue management is another prominent area of political PR. This involves how politicians and their parties define, prioritize, develop, and convey critical 
                                issues. We keep a watch over all these key areas by using various tools, such as position papers, platform statements, speeches, debates, and so on. 
                            </li>
                            <li><b>Event management:</b>We create political events which support politicians’ exposure. We are responsible for planning, managing, and executing events such as party conventions, 
                                online webinars and meetings.
                            </li>
                            <li><b>Evaluation management:</b>Are the results of PR activity measurable?  Several parties, individuals, and groups have developed different models, spreadsheets, and estimates to do 
                                exactly that. However, PR efforts have no specific analytic metrics that can be used to measure their success, so still, they are just estimates. Nevertheless, an evaluation management
                                process is necessary. This work illustrates the importance of PR activities to achieve politicians’ goals and helps pinpoint areas for improvement.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <br></br><br></br>
                        <span style={{ fontSize: "30px" }}><b><u>Digital political PR </u></b></span><br></br><br></br>
                        <span style={{ fontSize: '25px' }}>➺</span> Many politicians consult their social media activities with a PR manager, but they mostly manage them independently. 
                        Nevertheless, there are known cases where leaving politicians' accounts to an external company have led to much better results compared to the politicians running them themselves.<br></br>
                    </div>
                    <div>
                        <br></br><br></br>
                        <span style={{ fontSize: "30px" }}><b><u>Political surveys</u></b></span><br></br><br></br>
                        <span style={{ fontSize: '25px' }}>➺</span>At Righteous we also undertake professional assignments for conducting political surveys for political parties, 
                        organization's and individuals to gauge public perception and opinion regarding the party's popularity, govt performance or as to how many seats a party can win in an impending election.<br></br>
                        <span style={{ fontSize: '25px' }}>➺</span>Our expert analysis and predictions have proved correct during the Gujarat assembly elections in 2012 & 2017, UP assembly election in 2021, 
                        Municipal Corporation elections in Mumbai, Thane, Kalyan Dombivili, Nashik, Navi Mumbai, Pune and Pimpri Chinchwad and Loksabha election in 2019.<br></br>
                        <span style={{ fontSize: '25px' }}>➺</span>Many organization's and political parties are using our services for conducting mid term surveys also.<br></br>
                    </div>
                    <div>
                        <br></br><br></br>
                        <span style={{ fontSize: "30px" }}><b><u>Liaison work</u></b></span><br></br><br></br>
                        <span style={{ fontSize: '25px' }}>➺</span>We undertake facilitation of communication with regulatory organisations to develop a strong working relationship with these organisations so as to obtain the 
                        necessary approvals and permissions required for the functioning of a business entity in a smooth manner.<br></br>
                        <span style={{ fontSize: '25px' }}>➺</span>We aim to give our clients a one window solution by providing them liaison with various licensing and regulatory authorities.<br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BussinessProfile
