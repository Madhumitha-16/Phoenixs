import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function VoiceForm() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  useEffect(() => {
    handleVoiceInput();
  }, [transcript]);

  const handleVoiceInput = () => {
    if (transcript) {
      const emailRegex = /^set email ([^\s@]+@[^\s@]+\.[^\s@]+)$/i;
  
      const commands = [
        {
          command: "set first name *",
          callback: (name) => setFormData({ ...formData, firstName: name }),
        },
        {
          command: "set last name *",
          callback: (name) => setFormData({ ...formData, lastName: name }),
        },
        {
          command: "set email *",
          callback: (email) => setFormData({ ...formData, email }),
        },
        {
          command: "set message *",
          callback: (message) => setFormData({ ...formData, message }),
        },
      ];
  
      commands.forEach(({ command, callback }) => {
        const regex = new RegExp(`^${command.replace(/\*/g, "(.+)")}$`, "i");
        console.log("regex",regex)
        const match = transcript.toLowerCase().match(regex);
        if (match) {
           
          callback(match[1]);
          resetTranscript();
        }
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with formData
    console.log(formData);
  };

  return (
    <div className="App">
      <h2>Voice-Controlled Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label className="input-group">
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </label>
        <br />
        <label className="input-group">
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </label>
        <br />
        <label className="input-group">
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <br />
        <label className="input-group">
          Message:
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Transcript: {transcript}</p>
    </div>
  );
}

export default VoiceForm;
