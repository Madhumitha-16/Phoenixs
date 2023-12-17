// VideoDropdown.js
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../components/VideoDropdown.css';

const Q1 = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showFailMsg, setShowFailMsg] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
    setSelectedOption(null);
    setShowSuccessMsg(false);
    setShowFailMsg(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Check if the selected option is correct
    // For demonstration purposes, let's assume the correct option is "C"
    if (option === 'B') {
      setShowSuccessMsg(true);
      setShowFailMsg(false);
    } else {
      setShowSuccessMsg(false);
      setShowFailMsg(true);
    }
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
            url="/PLEASE.mp4" // Change the path based on your file location
            controls
            playing
            width="100%"
            height="400px"
          />
          <div className="question-container">
            <h2>Question: What is the correct answer?</h2>
            <div className="options-container">
              <button
                className={`option ${selectedOption === 'A' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('A')}
              >
                Breeze
              </button>
              <button
                className={`option ${selectedOption === 'B' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('B')}
              >
               Please
              </button>
              <button
                className={`option ${selectedOption === 'C' ? 'selected' : ''}`}
                onClick={() => handleOptionClick('C')}
              >
               Peace
              </button>
            </div>
          </div>
          {showSuccessMsg && (
            <div className="congrats-message success">
              Congratulations! Your answer is correct!
            </div>
          )}
          {showFailMsg && (
            <div className="congrats-message fail">
              Oops! Your answer is incorrect. Try again!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Q1;
