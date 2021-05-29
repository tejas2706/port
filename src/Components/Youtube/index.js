import React from 'react';
import YouTube from 'react-youtube';
import './styles.css';

function Youtube() {

    const opts = {
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="youtube" id="youtube">
            <div className="youtube__title">
                Visit My Youtube Channel
            </div>
            <div className="youtube__playlist">
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=1OC9V92ROoA&list=PLAk4Pqtbkzx256D3m_6DTwEyRqrkRolPX">
                    <div>
                        <span className="youtube__eachDetail">Israel And Middle East<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 13</span><br></br>
                        &nbsp;&nbsp;<span>Details: More about deemed Conveyance</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=zmGdUZZPxsk&list=PLAk4Pqtbkzx1BcZuBx_7vWhsqCQNwWKRM">
                    <div>
                        <span className="youtube__eachDetail">Deemed Conveyance<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 6</span><br></br>
                        &nbsp;&nbsp;<span>Details: More about deemed Conveyance</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=J5xVeDNDoK0&list=PLAk4Pqtbkzx3Pr9F23BzsepDA4PXTAbR_">
                    <div>
                        <span className="youtube__eachDetail">Important Schemes of modi sarkar<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 13</span><br></br>
                        &nbsp;&nbsp;<span>Details: More about deemed Conveyance</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=Kd7B14xVNKs&list=PLAk4Pqtbkzx12l78u9d2Ygk4VBqaTpXnB">
                    <div>
                        <span className="youtube__eachDetail">Electricity issues<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 9</span><br></br>
                        &nbsp;&nbsp;<span>Details: More about deemed Conveyance</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=40Cne85j9YY&list=PLAk4Pqtbkzx0YDcJ_b3ZxFMPBEF-Y8zq-">
                    <div>
                        <span className="youtube__eachDetail">Awareness Campaigns<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 40</span><br></br>
                        &nbsp;&nbsp;<span>Details: More about deemed Conveyance</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=xArMuum_H0A&list=PLAk4Pqtbkzx33HlCxzXBwcMreQOQfp4f4">
                    <div>
                        <span className="youtube__eachDetail">Consumer is king<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 8</span><br></br>
                        &nbsp;&nbsp;<span>Details: More about deemed Conveyance</span>
                    </div>
                </a>
                <a className="youtube__eachPlaylist" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=09hrSf9QSpQ&list=PLAk4Pqtbkzx2Dxz_OiwpmJk8REJwDnhbD">
                    <div>
                        <span className="youtube__eachDetail">Co-op housing matters<br></br></span>
                        &nbsp;&nbsp;<span>Videos: 73</span><br></br>
                        &nbsp;&nbsp;<span>Details: More about deemed Conveyance</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Youtube
