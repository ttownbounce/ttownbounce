import React from 'react';

const Picture = ({ src, isSelected, onClick }) => {
  const pictureStyle = {
    border: isSelected ? "5px solid Red" : "2px solid Black",
    // maxwidth: '300px',   // Set the width as a fixed value (adjust as needed)
    // maxheight: '250px',  // Set the height as a fixed value (adjust as needed)
  };

  return (
    <img
      src={src}
      alt="Option"
      style={pictureStyle}
      onClick={onClick}
    />
  );
};

export default Picture;