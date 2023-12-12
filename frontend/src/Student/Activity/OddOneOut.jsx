// import React from 'react'
// import { useEffect,useState } from 'react';
// import a from'../../img/Pentagon.jpg';
// import b from '../../img/Triangle.jpg';
// import c from '../../img/Square.jpg';
// import d from'../../img/Circle.jpg';
// export default function OddOneOut() {
   
    
    
//     // Shuffle function to randomize the order of images
    
//     const images = [
//         a,b,c,d
//     ];

//     function shuffle(array) {
//         for (let i = array.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//     }
    
//     // Function to create and display images in the container


    
//     function displayImages() {
//         const gameContainer = document.getElementById('game-container');
//         gameContainer.innerHTML = ''; // Clear previous content
//         shuffle(images); // Shuffle the images
//         images.forEach((image, index) => {
//             const imgElement = document.createElement('img');
//             imgElement.setAttribute("src",image);
//             // imgElement.src = image;
//             // imgElement.alt = `Image ${index + 1}`;
//             // imgElement.className = 'game-image';
//             imgElement.addEventListener('click', () => checkAnswer(index));
//             gameContainer.appendChild(imgElement);
//         });
//     }
//     const oddOneOutImage = d; // Change this to the image you want to be the odd one out 
//     // Function to check if the selected image is the odd one out
//     function checkAnswer(selectedIndex) {
//         const selectedImage = images[selectedIndex];
//         console.log(selectedImage);
//         console.log(oddOneOutImage);
//         if (selectedImage === oddOneOutImage) {
//             displayMessage('Correct! You found the odd one out.');
//         } else {
//             displayMessage('Incorrect! Try again.');
//         }
//         // Reload images for a new round
//         displayImages();
//     }
//     function displayMessage(message) {
//         const messageContainer = document.getElementById('message-container');
//         messageContainer.textContent = message;
//         console.log(messageContainer);
//     }
    
//     // Initial display of images
//     // displayImages();
   
//     return (
//         <div>
       
        
    
//         <div id="game-container">
//         </div>
//     <button onClick={displayImages}>start game</button>
//         <div id="message-container"></div>
    
    
//         </div>
//       )
    

// }

import React, { useState, useEffect } from 'react';
import './OddOneOut.css'; // Import a separate CSS file for styling

import a from '../../img/Pentagon.jpg';
import b from '../../img/Triangle.jpg';
import c from '../../img/Square.jpg';
import d from '../../img/Circle.jpg';

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

    // Delay clearing the message to show it for a short time
    setTimeout(() => setMessage('Find the odd one out!'), 1000);

    // Uncomment the next line if you want to clear the message after a certain time
    // setTimeout(() => setMessage(''), 3000);

    // Use React refs to access the game-container
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

    // Uncomment the next line if you want to clear the message after a certain time
    // setTimeout(() => setMessage(''), 3000);
  };

  const displayMessage = (msg) => {
    setMessage(msg);
  };

  return (
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
  );
};

export default OddOneOut;
