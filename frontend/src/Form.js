import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function VoiceForm() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const [formData, setFormData] = useState({
    name: "",
    address:"",
    udid:"",
    disabilityType:"",
    aadharCardNumber:"",
    organizationName:""
    
  });

  const [currentField, setCurrentField] = useState("");

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  useEffect(() => {
    const delay = 1000; 
    const timeoutId = setTimeout(() => {
      handleVoiceInput();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  },[transcript]);

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const handleVoiceInput = () => {
    if (transcript) {
  
      const commands = [
        {
          command: "set name *",
          
          callback: (name) => setFormData({ ...formData, firstName: name }) ,
        },
        {
          command: "set last name *",
          callback: (name) => setFormData({ ...formData, lastName: name }),
        },
        {
          command: "set u d i d number *",
          callback: (message) => setFormData({ ...formData, message }),
        },
        {
          command: "set disability type *",
          callback: (message) => setFormData({ ...formData, message }),
        },
        {
          command: "set message *",
          callback: (message) => setFormData({ ...formData, message }),
        },
        {
          command: "submit form",
          callback: ()=>handleFormSubmit(formData)
        },
      ];
  
      commands.forEach(({ command, callback }) => {
        const regex = new RegExp(`^${command.replace(/\*/g, "(.+)")}$`, "i");
        console.log("regex",regex)
        const match = transcript.toLowerCase().match(regex);
        if (match) {
           
          callback(match[1]);
          resetTranscript();
        }else{
          // speak({ text: `Sorry, please try again` });
          resetTranscript();
        }
      });
    }
  };

  const handleFormSubmit = (e) => {
    console.log(formData);
  };

  useEffect(() => {
    if (currentField && transcript === "") {
      speak(`Please fill ${currentField}`);
    }
  }, [currentField, transcript]);

  return (
    <div className="App">
      {/* <h2>Voice-Controlled Form</h2>
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
          Message:
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form> */}
      <p>Transcript: {transcript}</p>
    </div>
  );
}

export default VoiceForm;