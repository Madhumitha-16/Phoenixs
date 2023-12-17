// VideoDropdown.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../components/VideoDropdown.css';
const Learn = () => {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
 

  return (
    <div className="video-container">
      <h1 className="header">Learn LipReading</h1>
      <button className="toggle-button" onClick={toggleVideo}>
        Toggle Video
      </button>
      {showVideo && (
        <div className="video-wrapper">
          <ReactPlayer
            url="/L.mp4" // Change the path based on your file location
            controls
            playing
            width="100%"
            height="400px"
          />
          
        </div>
      )}
    </div>
  );
};

export default Learn;
