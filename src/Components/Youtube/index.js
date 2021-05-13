import React from 'react';
import YouTube from 'react-youtube';
import './styles.css';

function Youtube() {

    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="youtube">
            <div className="youtube__title">
                Visit My Youtube Channel...
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <YouTube className="youtubeThumb1" videoId="zmGdUZZPxsk" opts={opts} />
        </div>
    )
}

export default Youtube
