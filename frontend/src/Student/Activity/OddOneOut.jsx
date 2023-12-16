import React, { useState, useEffect } from 'react';
import './OddOneOut.css'; // Import a separate CSS file for styling

import a from '../../img/Pentagon.jpg';
import b from '../../img/Triangle.jpg';
import c from '../../img/Square.jpg';
import d from '../../img/Circle.jpg';
import StudentNavbar from '../../Components/StudentNavbar';

const OddOneOut = () => {
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [a, b, c, d];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const displayImages = () => {
    shuffle(images);
    setSelectedImage(null); // Reset selected image
    setMessage(''); // Clear message
    setTimeout(() => setMessage('Find the odd one out!'), 1000);
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Clear previous content

    images.forEach((image, index) => {
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', image);
      imgElement.addEventListener('click', () => handleImageClick(index));
      gameContainer.appendChild(imgElement);
    });
  };

  const oddOneOutImage = d;

  const handleImageClick = (selectedIndex) => {
    const selectedImageSrc = images[selectedIndex];

    setSelectedImage(selectedImageSrc);

    if (selectedImageSrc === oddOneOutImage) {
      displayMessage('Correct! You found the odd one out.');
    } else {
      displayMessage('Incorrect! Try again.');
    }

  };

  const displayMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
    <StudentNavbar />
    <div className="odd-one-out-container">
      <div id="game-container" className="game-container"></div>
      <button onClick={displayImages}>Start Game</button>
      <div id="message-container" className="message-container">
        {message}
      </div>
      {selectedImage && (
        <div className="selected-image-container">
          <p>Selected Image:</p>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
    </>
  );
};

export default OddOneOut;
