import React from 'react';
import './styles.css';
import image1 from './images/youtube.png';

function Youtube() {

    return (
        <div className="youtube" id="youtube">
            <div className="youtube__title allTitle">
                Take a look at my Youtube playlists
            </div>
            <img className="youtube__titleImage" src={image1} alt='image1'></img>
            <div className="youtube__playlist">
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=09hrSf9QSpQ&list=PLAk4Pqtbkzx2Dxz_OiwpmJk8REJwDnhbD">
                    <div>
                        <span className="youtube__eachDetail">Co-op Housing Society issues.<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 73</span><br></br>
                        &nbsp;&nbsp;<span>Details: Issues faced by Housing societies and their resolution.</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=40Cne85j9YY&list=PLAk4Pqtbkzx0YDcJ_b3ZxFMPBEF-Y8zq-">
                    <div>
                        <span className="youtube__eachDetail">Awareness Campaigns<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 40</span><br></br>
                        &nbsp;&nbsp;<span>Details: Videos meant to create public awareness on different issues.</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=1OC9V92ROoA&list=PLAk4Pqtbkzx256D3m_6DTwEyRqrkRolPX">
                    <div>
                        <span className="youtube__eachDetail">Israel And Middle East<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 13</span><br></br>
                        &nbsp;&nbsp;<span>Details: Regarding the situation in the Middle East Asia.</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=J5xVeDNDoK0&list=PLAk4Pqtbkzx3Pr9F23BzsepDA4PXTAbR_">
                    <div>
                        <span className="youtube__eachDetail">Important Schemes of modi sarkar<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 13</span><br></br>
                        &nbsp;&nbsp;<span>Details: Various schemes of Government explained.</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Kd7B14xVNKs&list=PLAk4Pqtbkzx12l78u9d2Ygk4VBqaTpXnB">
                    <div>
                        <span className="youtube__eachDetail">Electricity issues<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 9</span><br></br>
                        &nbsp;&nbsp;<span>Details: Problems faced by Consumers regarding electricity.</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=xArMuum_H0A&list=PLAk4Pqtbkzx33HlCxzXBwcMreQOQfp4f4">
                    <div>
                        <span className="youtube__eachDetail">Consumer is king<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 8</span><br></br>
                        &nbsp;&nbsp;<span>Details: Awareness campaign regarding the Consumer Act.</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=zmGdUZZPxsk&list=PLAk4Pqtbkzx1BcZuBx_7vWhsqCQNwWKRM">
                    <div>
                        <span className="youtube__eachDetail">Deemed Conveyance<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 6</span><br></br>
                        &nbsp;&nbsp;<span>Details: Importance of Deemed Conveyance and procedure to get it.</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Youtube
