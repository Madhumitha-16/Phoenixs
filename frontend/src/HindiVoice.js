import React, { useEffect } from 'react';

const HindiVoice = () => {
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'hi-IN'; // Set language to Hindi
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();

        if (command.includes('नमस्ते')) { // Example: Command in Hindi for 'Hello'
          window.location.href = '/hello'; // Redirect to '/hello' route/page
        }
        
      };

      recognition.start(); // Start speech recognition

      return () => {
        recognition.stop(); // Stop speech recognition when component unmounts
      };
    } else {
      console.log('Speech recognition not supported');
      // Handle the case where speech recognition is not supported
    }
  }, []);

  return (
    <div>
      <p>Speaking in Hindi will trigger actions.</p>
      {/* Additional components/content */}
    </div>
  );
};

export default HindiVoice;
