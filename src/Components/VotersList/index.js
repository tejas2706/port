import React from 'react';
import './styles.css';

function VotersList() {
    return (
        <div id="votersList" className="votersList">
            <div className="inner">
                <blink>
                    <span className="voterList_box">V</span>
                    <span className="voterList_box">O</span>
                    <span className="voterList_box">T</span>
                    <span className="voterList_box">E</span>
                    <span className="voterList_box">R</span>
                    &nbsp;
                    &nbsp;
                    <span className="voterList_box">L</span>
                    <span className="voterList_box">I</span>
                    <span className="voterList_box">S</span>
                    <span className="voterList_box">T</span>
                    </blink>
                <br></br>
                <b>CHECK YOUR NAME HERE.</b>
                <br></br>
            The voter list (officially known as the electoral roll) is a compiled comprehensive list, which includes the names and other details of voters in a particular constituency.
            <br></br>
            The Election Commission of India has published the voter's list for 2020 on their official website. With the convenience of the online system, the need to head to a booth with your ID proof or other essential documents to search for your name in voters list is no longer required.
            <br></br>
            However, this has to be done at least 10 days before the elections so that any type of error can be fixed at the earliest. Once the elections are about to begin, alterations are not allowed.
            <br></br><br></br>
            Check your name by clicking on the following link: 
            <br></br>
            <span><b><a href="https://localbodyvoterlist.maharashtra.gov.in/ObjectionOnClick/SearchName" target="_blank" rel="noreferrer">https://localbodyvoterlist.maharashtra.gov.in/ObjectionOnClick/SearchName</a></b></span>
            <br></br>

            </div>
            <div className="decorativeLine">⊱ ───── .⋅ ✯ ⋅. ───── ⊰</div>
        </div>
    )
}

export default VotersList
