import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Voice = () => {
  const { transcript, listening, startListening, stopListening, resetTranscript } = useSpeechRecognition();

  const handleStart = () => {
    SpeechRecognition.startListening();
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    SpeechRecognition.abortListening();
    resetTranscript();
  };

  return (
    <div>
      <h1>Speech Recognition Test</h1>
      <p>Transcript: {transcript}</p>
      <p>Listening: {listening ? "Yes" : "No"}</p>
      <button onClick={handleStart}>Start Listening</button>
      <button onClick={handleStop}>Stop Listening</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Voice;
