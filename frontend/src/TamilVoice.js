import React, { useEffect } from 'react';

const TamilVoice = () => {
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'ta-IN'; 
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();

        if (command.includes('')) { 
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
      <p>Speaking in Tamil will trigger actions.</p>
      {/* Additional components/content */}
    </div>
  );
};

export default TamilVoice;
