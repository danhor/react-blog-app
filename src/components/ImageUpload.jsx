import React, { useState } from 'react';
import Spinner from './LoadingSpinner'; // Import your spinner component

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Simulating an upload delay using setTimeout
    setTimeout(() => {
      // Perform your image upload logic here
      // Once the upload is complete, you can reset the state and display a success message
      setIsUploading(false);
      setSelectedImage(null);
      alert('Image uploaded successfully!');
    }, 2000);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          <button onClick={handleUpload} disabled={isUploading}>
            Upload
          </button>
        </div>
      )}
      {isUploading && <Spinner />}
    </div>
  );
};

export default ImageUpload;
