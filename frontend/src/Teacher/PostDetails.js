import React, { useState } from 'react';

const PostDetails = () => {
  // State to manage the text area value
  const [textValue, setTextValue] = useState('');

  // Function to handle text area value change
  const handleTextAreaChange = (e) => {
    setTextValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the textValue here, for example, send it to a server.
    console.log('Text submitted:', textValue);
  };

  return (
    <div>
      <h2>React Text Area Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Text:
          <textarea
            value={textValue}
            onChange={handleTextAreaChange}
            rows="4" 
            cols="50" 
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostDetails;
