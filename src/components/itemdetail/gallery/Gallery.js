import React, { useState, useRef } from 'react';
import GPic from './GPic.js';
import './Gallery.css'; // Create Gallery.css file for styling

const Gallery = ({ imageData }) => {
  const [selectedPicture, setSelectedPicture] = useState(imageData.images[0]);
  const gallerySmallRef = useRef(null);

  const handlePictureClick = (pictureSrc) => {
    setSelectedPicture(pictureSrc);
    // Scroll the selected image to the center of the gallery-small container
    if (gallerySmallRef.current) {
      const selectedImageElement = gallerySmallRef.current.querySelector(
        `img[src="${pictureSrc}"]`
      );
      if (selectedImageElement) {
        const scrollContainerWidth = gallerySmallRef.current.offsetWidth;
        const selectedImageOffsetLeft = selectedImageElement.offsetLeft;
        const selectedImageWidth = selectedImageElement.offsetWidth;
        const centerOffset = scrollContainerWidth / 2 - selectedImageWidth / 2;
        gallerySmallRef.current.scrollTo({
          left: selectedImageOffsetLeft - centerOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div className="gallery-display">
      <div className="gallery-item">
        <div className="gallery-big">
          <img src={selectedPicture} alt="item" />
        </div>
        <div className="gallery-small" ref={gallerySmallRef}>
          {imageData.images.map((image, imageIndex) => (
            <GPic
              key={imageIndex}
              src={image}
              isSelected={image === selectedPicture}
              onClick={() => handlePictureClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
