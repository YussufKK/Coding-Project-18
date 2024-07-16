import React, { useState } from 'react';
import './UploadButton.css';

const UploadButton = () => {
  const [message, setMessage] = useState('');

  const handleUpload = () => {
    setMessage('Uploading Feedback...');
    setTimeout(() => {
      setMessage('Feedback uploaded successfully!');
    }, 2000); // Simulate upload time
  };

  return (
    <div className="upload-button">
      <button onClick={handleUpload}>Upload Feedback</button>
      {message && <p className="feedback">{message}</p>}
    </div>
  );
};

export default UploadButton;
