// src/ScreenNarrator.js
import React, { useState, useEffect } from 'react';

const ScreenNarrator = () => {
  const [textToSpeak, setTextToSpeak] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const speechSynthesis = window.speechSynthesis;

    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      
      // Set the language to Hindi (India)
      utterance.lang = 'hi-IN';

      speechSynthesis.speak(utterance);
      setIsSpeaking(true);

      utterance.onend = () => {
        setIsSpeaking(false);
      };
    };

    if (textToSpeak) {
      speak();
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [textToSpeak]);

  const handleInputChange = (e) => {
    setTextToSpeak(e.target.value);
  };

  const handleSpeakClick = () => {
    if (!isSpeaking) {
      setTextToSpeak('नमस्ते, मैं हूँ आपका स्क्रीन नैरेटर।');
    }
  };

  const handleStopClick = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      <textarea
        rows="4"
        placeholder="बोलने के लिए पाठ दर्ज करें..."
        onChange={handleInputChange}
      />
      <div>
        <button onClick={handleSpeakClick} disabled={isSpeaking}>
          बोलें
        </button>
        <button onClick={handleStopClick} disabled={!isSpeaking}>
          रोकें
        </button>
      </div>
    </div>
  );
};

export default ScreenNarrator;
