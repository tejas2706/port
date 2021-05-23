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
        <div className="youtube">
            <div className="youtube__title">
                Visit My Youtube Channel
            </div>
            <div className="youtube__playlist">
                <div className="youtube__eachPlaylist">
                    <YouTube className="youtubeThumb1" videoId="zmGdUZZPxsk" opts={opts} />
                    <div className="youtube__eachDetail">
                        Deemed Conveyance
                    </div>
                </div>
                <div className="youtube__eachPlaylist">
                    <YouTube className="youtubeThumb1" videoId="zmGdUZZPxsk" opts={opts} />
                    <div className="youtube__eachDetail">
                        Deemed Conveyance
                    </div>
                </div>
                <div className="youtube__eachPlaylist">
                    <YouTube className="youtubeThumb1" videoId="zmGdUZZPxsk" opts={opts} />
                    <div className="youtube__eachDetail">
                        Deemed Conveyance
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Youtube
