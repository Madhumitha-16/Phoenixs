import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

function VoiceControl() {
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();
  const commands = [
    {
      command: ["Go to *"],
      callback: redirectPage => setRedirectUrl(redirectPage),
    },
    {
      command: ["Go back"],
      callback: () => navigate(-1),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const pages = ["home", "Forum", "register", "login"];
  const urls = {
    home: "/",
    forum: "/forum",
    register: "/register",
    login: "/login",
  };

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
    speak({ text: `hello` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (redirectUrl && pages.includes(redirectUrl)) {
      speak({ text: `Navigated to ${redirectUrl} page` });
    } else if (redirectUrl) {
      speak({ text: `Oops! there is no such page ${redirectUrl}` });
    }
  }, [redirectUrl, pages, speak]);

  useEffect(() => {
    if (!speaking && redirectUrl && pages.includes(redirectUrl)) {
        navigate(urls[redirectUrl]);
    }
  }, [speaking, redirectUrl, pages, navigate]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />;
      
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <div className="App">
      {redirect}
      <p id="transcript">Transcript: {transcript}</p>
    </div>
  );
}

export default VoiceControl;
