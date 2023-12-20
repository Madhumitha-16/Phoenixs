import React, { useEffect } from 'react';

const EnglishSpeechRecognition = () => {
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'en-US'; 
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();

        if (command.includes('login')) { 
          window.location.href = '/login'; 
        }
      
      };

      recognition.start(); 

      return () => {
        recognition.stop(); 
      };
    } else {
      console.log('Speech recognition not supported');
     
    }
  }, []);

  return (
    <div>
      <p>Speaking in English will trigger actions.</p>
      {/* Additional components/content */}
    </div>
  );
};

export default EnglishSpeechRecognition;
