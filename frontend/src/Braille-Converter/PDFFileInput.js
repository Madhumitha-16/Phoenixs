import React, { useState } from 'react';

const PDFFileInput = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
    </div>  
  );
};

export default PDFFileInput;
